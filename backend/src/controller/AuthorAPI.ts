import { Connection } from "typeorm";
import { Author } from "../entity/Author";
import { Post } from "../entity/Post";

export class AuthorAPI{
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection
  }

  async getAuthors(): Promise<Array<IAuthor>> {
    return await this.connection.manager.find(Author)
  }

  async getAuthor(id: number): Promise<IAuthor> {
    return await this.connection.manager.findOne(Author, {
      where: { id },
    });
  }

  async saveAuthor(author: IAuthor): Promise<IAuthor> {
    return await this.connection.manager.save(Author, author)
  }
}

interface IAuthor {
  id?: number;
  name: string;
  lastname: string;
  email:string;
  post?:Array<Post>;
}