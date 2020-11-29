import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  label: string;
  @Column({ nullable: true })
  desc: string;
  @Column()
  slug: string;
  @ManyToOne(() => Post, post => post.category)
  post: Post;
}