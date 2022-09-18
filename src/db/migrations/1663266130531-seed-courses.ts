import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from '@cms/users/user.entity';
import { TableEntity } from '@cms/tables/table.entity';
import { UserInfoEntity } from '@cms/user.info/user.info.entity';

export class SeedCourses1663266130531 implements MigrationInterface {
  private readonly tableRepo = getRepository(TableEntity);
  private readonly userRepo = getRepository(UserEntity);
  private readonly userInfoRepo = getRepository(UserInfoEntity);

  public async up(queryRunner: QueryRunner): Promise<void> {
    await this.createTables();
    await this.createUsers();
    await this.createUserInfo();
  }

  private async createUserInfo(): Promise<void> {
    await this.userInfoRepo.save({
      telegram_url: 'dsfdsff',
      telegramId: '4535345535',
      instagramUrl: '@dfafgaffdgdfa',
      user: { id: 1 },
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
  private async createUsers(): Promise<void> {
    await this.userRepo.save({
      firsName: 'Vlad',
      lastName: 'Brykov',
      avatar: '/hghsfhfgh',
      profession: 'NodeJS',
      login: 'login',
      password: 'password',
      table: { id: 1 },
    });
  }

  private async createTables(): Promise<void> {
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
  }
}
