import { Connection } from "typeorm";
import { Post } from "../entity/Post";
import { Category } from "../entity/Category";

export class CategoryAPI {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  async getCategories(): Promise<Array<ICategory>> {
    return await this.connection.manager.find(Category)
  }

  async getCategory(id: number): Promise<ICategory> {
    return await this.connection.manager.findOne(Category, {
      where: { id },
    });
  }

  async saveCategory(category: ICategory): Promise<ICategory> {
    return await this.connection.manager.save(Category, category)
  }
}

interface ICategory {
  id?: number;
  label: string;
  desc?: string;
  slug: string;
  post: Post
}