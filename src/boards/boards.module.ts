import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { Board } from './entities/board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from 'src/lists/entities/list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board, List])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
