import { Injectable } from '@nestjs/common'
import { List } from 'src/database/list'

@Injectable()
export class ListService {
  private readonly lists: List[] = []

  create(list: List) {
    this.lists.push(list)
    return list
  }

  getListAll(): List[] {
    return this.lists
  }

  getListOne(id: string): List[] {
    const res = this.lists.map((list) => {
      if (id === list.id) return list
    })
    return res
  }

  getListSearch() {
    return this.lists[3]
  }

  remove(id: string) {
    return this.lists
  }
}
