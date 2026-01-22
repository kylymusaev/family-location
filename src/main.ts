import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { setServerCors } from './common/server/server.cors'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const port = config.get<number>('port')

  setServerCors(app)

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  await app.listen(Number(port))
}
bootstrap()
