import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";
import { Category } from "./Category";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  body: string;
  @Column()
  slug: string;
  @Column()
  date: string;
  @Column({name: 'cover_img'})
  coverImg: string;
  @Column({name: 'card_img'})
  cardImg: string;
  @ManyToOne(() => Author, author => author.post)
  author: Author
  @OneToMany(() => Category, category => category.post)
  category: Array<Category>
}