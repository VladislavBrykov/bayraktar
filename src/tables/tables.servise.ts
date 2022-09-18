import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoInterface } from '@cms/interfaces/interfaces';
import { TableEntity } from '@cms/tables/table.entity';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(TableEntity)
    private todoRepository: Repository<TodoInterface>,
  ) {}

  getTableById(id): Promise<TodoInterface> {
    const table = this.todoRepository.findOneOrFail({
      where: { id },
      relations: ['user'],
    });
    if (table) {
      return table;
    }
    throw new ForbiddenException(`Table not exist!`);
  }
}
