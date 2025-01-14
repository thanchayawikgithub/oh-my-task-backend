import { Column } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Entity } from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'avatar_url' })
  avatarUrl: string;
}
