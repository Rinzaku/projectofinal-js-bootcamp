import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  lastname: string;
  @Column()
  email: string;
  @OneToMany(() => Post, post => post.author)
  post: Array<Post>;
}