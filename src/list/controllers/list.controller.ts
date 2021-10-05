import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { List } from 'src/database/list'
import { ListService } from '../services/list.service'

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  getListAll(): List[] {
    return this.listService.getListAll()
  }

  @Get('/:id')
  getListOne(@Param('id') id: string): List[] {
    return this.listService.getListOne(id)
  }

  @Get('search')
  getSearch(): List {
    return this.listService.getListSearch()
  }

  @Post('/post')
  create(@Body() List) {
    console.log(List)
    this.listService.create(List)
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.listService.remove(id)
  }
}
