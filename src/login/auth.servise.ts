import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserEntity } from '@cms/users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoInterface } from '@cms/interfaces/interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private todoRepository: Repository<TodoInterface>,
  ) {}

  signIn(login, password): Promise<TodoInterface> {
    const user = this.todoRepository.findOneOrFail({
      where: { login, password },
    });
    if (user) {
      return user;
    }
    throw new ForbiddenException(`User not exist!`);
  }
}
