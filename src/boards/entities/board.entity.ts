import { BoardMember } from 'src/board-members/entities/board-member.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { List } from 'src/lists/entities/list.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'boards' })
export class Board extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @OneToMany(() => List, (list) => list.board)
  lists: List[];

  @OneToMany(() => BoardMember, (member) => member.board)
  members: BoardMember[];
}
