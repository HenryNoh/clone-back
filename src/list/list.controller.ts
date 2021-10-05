import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import { ListService } from './list.service'

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('')
  async getListAll() {
    return await this.listService.getListAll()
  }

  @Get('/:id')
  async getListOne(@Query('id') id: string) {
    console.log(id)
    return await this.listService.getListOne(id)
  }

  @Post()
  async create(@Body() createListDto: CreateListDto) {
    return await this.listService.create(createListDto)
  }

  @Put(':id')
  async update(@Query('id') id: string, @Body() updateListDto: UpdateListDto) {
    return await this.listService.update(id, updateListDto)
  }

  @Delete(':id')
  async delete(@Query('id') id: string) {
    return await this.listService.delete(id)
  }
}
