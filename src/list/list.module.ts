import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ListController } from './list.controller'
import { ListSchema } from './schemas/list.schema'
import { ListService } from './list.service'

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'List', schema: ListSchema, collection: 'List' }],
      'ListDb'
    ),
  ],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService],
})
export class ListModule {}
