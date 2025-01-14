import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { validate } from './config/env.validation';
import { BoardsModule } from './boards/boards.module';
import { TasksModule } from './tasks/tasks.module';
import { ListsModule } from './lists/lists.module';
import { BoardMembersModule } from './board-members/board-members.module';
import { Task } from './tasks/entities/task.entity';
import { BoardMember } from './board-members/entities/board-member.entity';
import { List } from './lists/entities/list.entity';
import { Board } from './boards/entities/board.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [User, Board, List, Task, BoardMember],
        synchronize: configService.get('app.stage') === 'dev',
      }),
    }),
    UsersModule,
    BoardsModule,
    TasksModule,
    ListsModule,
    BoardMembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
