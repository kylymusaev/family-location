import { Injectable } from '@nestjs/common'
import { ShareLocationDto } from './dto/shareLocation.dto'

@Injectable()
export class LocationService {
  async userConnected(args: any) {
    console.log(args)
  }

  async userDisconnected() {}

  async locationShare(payload: ShareLocationDto) {}
}
