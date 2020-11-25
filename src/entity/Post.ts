import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";
import { Category } from "./Category";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ default: false })
  published: boolean;

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;

  @ManyToMany((type) => Category, (category) => category.posts)
  @JoinTable()
  categories: Category[];
}
