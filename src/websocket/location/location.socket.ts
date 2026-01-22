import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { ShareLocationDto } from './dto/shareLocation.dto'
import { LocationService } from './location.service'

@WebSocketGateway({
  path: '/socket/location',
  cors: {
    origin: process.env.NODE_ENV === 'development' ? '*' : process.env.DOMAIN,
  },
})
export class LocationSocket implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server

  constructor(private readonly locationService: LocationService) {}

  @SubscribeMessage('share-location-event')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: ShareLocationDto): void {
    this.locationService.locationShare(payload)
    this.server.emit('location-share-accepted', payload)
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    this.locationService.userDisconnected()

    this.server.emit('user-disconnected', client.id)
  }

  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
    this.locationService.userConnected(args)

    this.server.emit('user-connected', client.id)
  }

  afterInit(server: any) {}
}
