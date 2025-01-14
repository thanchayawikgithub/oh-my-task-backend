import { BoardMember } from 'src/board-members/entities/board-member.entity';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @OneToMany(() => Task, (task) => task.assignee)
  tasks: Task[];

  @OneToMany(() => BoardMember, (boardMember) => boardMember.user)
  boardMembers: BoardMember[];
}
