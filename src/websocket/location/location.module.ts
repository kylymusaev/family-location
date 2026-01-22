import { Module } from '@nestjs/common'
import { LocationSocket } from './location.socket'
import { LocationService } from './location.service'

@Module({
  providers: [LocationSocket, LocationService],
})
export class LocationModule {}
