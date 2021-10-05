import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getMe(): string {
    return '/user/me'
  }
}
