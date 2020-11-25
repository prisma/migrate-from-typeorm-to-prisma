import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  bio: string;

  @OneToOne((type) => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
