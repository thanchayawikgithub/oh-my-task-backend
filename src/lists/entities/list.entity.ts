import { Board } from 'src/boards/entities/board.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'lists' })
export class List extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @ManyToOne(() => Board, (board) => board.lists)
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @OneToMany(() => Task, (task) => task.list)
  tasks: Task[];
}
