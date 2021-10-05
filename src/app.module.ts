import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { ListModule } from './list/list.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    UserModule,
    ListModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
