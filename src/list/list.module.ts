import { Module } from '@nestjs/common'
import { ListController } from './controllers/list.controller'
import { ListService } from './services/list.service'

@Module({
  imports: [],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
