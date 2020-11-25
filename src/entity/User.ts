import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Post } from "./Post";
import { Profile } from "./Profile";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];

  @OneToOne((type) => Profile, (profile) => profile.user,  { cascade: true })
  profile: Profile;
}
