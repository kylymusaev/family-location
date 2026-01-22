import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import globalConfig from './common/config/global.config'
import { ApiModule } from './api/api.module'
import { WebSocketModule } from './websocket/websocket.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [globalConfig],
    }),
    ApiModule,
    WebSocketModule,
  ],
})
export class AppModule {}
