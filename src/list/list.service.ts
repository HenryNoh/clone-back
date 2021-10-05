import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import { List, ListDocument } from './schemas/list.schema'

@Injectable()
export class ListService {
  constructor(
    @InjectModel('List') private readonly listModel: Model<ListDocument>
  ) {}

  async getListAll(): Promise<List[]> {
    return await this.listModel.find().exec()
  }

  async getListOne(ObjectId: string): Promise<List> {
    return await this.listModel.findById('615bf7f56c2c3585edecc0c1').exec()
  }

  async create(createListDto: CreateListDto): Promise<List> {
    return await new this.listModel({
      ...createListDto,
      createdAt: new Date(),
    }).save()
  }

  async update(ObjectId: string, updateListDto: UpdateListDto): Promise<List> {
    return await this.listModel
      .findByIdAndUpdate(ObjectId, updateListDto)
      .exec()
  }

  async delete(id: string): Promise<List> {
    return await this.listModel.findByIdAndDelete(id).exec()
  }
}
