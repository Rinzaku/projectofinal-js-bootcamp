import { Connection } from "typeorm";
import { Author } from "../entity/Author";
import { Category } from "../entity/Category";
import { Post } from "../entity/Post"

export class PostAPI {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection
  }

  async getPosts(): Promise<Array<IPost>> {
    return await this.connection.manager.find(Post);
  }

  async getPost(id: number): Promise<IPost> {
    return await this.connection.manager.findOne(Post, {
      where: { id },
    });
  }

  async savePost(post: IPost): Promise<IPost> {
    return await this.connection.manager.save(Post, post)
  }

  async updatePost(post: IPost): Promise<IPost> {
    let currentPost = await this.getPost(post.id)
    // eliminamos nodos con valor undefined
    Object.keys(post).forEach(key =>
      post[key] === undefined && delete post[key]
    )

    currentPost = { ...currentPost, ...post}
    return await this.connection.manager.save(Post,post)
  }

  async deletePost(id: number): Promise<IPost> {
    let currentPost = await this.getPost(id)
    return await this.connection.manager.remove(currentPost)
  }

}

interface IPost {
  id?: number;
  title: string;
  body: string;
  slug: string;
  date: string;
  coverImg: string;
  cardImg: string;
  author?: Author;
  category?: Array<Category>;
}