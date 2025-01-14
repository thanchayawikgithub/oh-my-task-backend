import { BaseEntity } from 'src/common/entities/base.entity';
import { TaskPriority } from 'src/common/enums/task';
import { List } from 'src/lists/entities/list.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'tasks' })
export class Task extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'priority', type: 'enum', enum: TaskPriority })
  priority: TaskPriority;

  @Column({ name: 'due_date', nullable: true })
  dueDate: Date;

  @ManyToOne(() => List, (list) => list.tasks)
  @JoinColumn({ name: 'list_id' })
  list: List;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'assignee_id' })
  assignee: User;
}
