import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

export const setServerCors = (app: INestApplication) => {
  const config = app.get(ConfigService)
  const isDev = config.get<boolean>('isDev')
  const domain = config.get<string>('domain')

  app.enableCors({
    origin: isDev ? '*' : domain,
    methods: ['GET', 'POST'],
  })
}
