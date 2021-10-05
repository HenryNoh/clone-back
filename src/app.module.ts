import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ListModule } from './list/list.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://cloneTnoh:<password>@cluster0.a1inc.mongodb.net/List?retryWrites=true&w=majority',
      { connectionName: 'ListDb' }
    ),
    ListModule,
  ],
})
export class AppModule {}
