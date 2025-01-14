import { Board } from 'src/boards/entities/board.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { BoardMemberRole } from 'src/common/enums/board';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'board_members' })
export class BoardMember extends BaseEntity {
  @ManyToOne(() => Board, (board) => board.members)
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @ManyToOne(() => User, (user) => user.boardMembers)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'role', type: 'enum', enum: BoardMemberRole })
  role: BoardMemberRole;
}
