import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Board } from 'src/boards/entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List, Task, Board])],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
