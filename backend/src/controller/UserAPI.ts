import { hash } from "bcrypt";
import { Connection } from "typeorm";
import { User } from "../entity/User";

export class UserAPI {

  private readonly SALT_ROUNDS = 9;
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection
  }

  async getUsers(): Promise<Array<IUser>> {
    return await this.connection.manager.find(User);
  }
  async getUser(id: number): Promise<IUser> {
    return await this.connection.manager.findOne(User, {
      where: { id },
    });
  }
  async saveUser(user: IUser): Promise<IUser> {
    user.password = await hash(user.password, this.SALT_ROUNDS)
    return await this.connection.manager.save(User, user);
  }
  async updateUser(user: IUser): Promise<IUser> {
    let currentUser = await this.getUser(user.id)
    // eliminamos nodos con valor undefined
    Object.keys(user).forEach(key =>
      user[key] === undefined && delete user[key]
    )
    // si se ha enviado nuevo password, debe cifrarse
    if (user.hasOwnProperty('password')) {
      user.password = await hash(user.password, this.SALT_ROUNDS)
    }
    currentUser = { ...currentUser, ...user }
    return await this.connection.manager.save(User, currentUser)
  }
  // async deleteUser(id: number): Promise<IUser> {
  //   let currentUser = await this.getUser(id)
  //   return await this.connection.manager.remove(User, currentUser)
  // }
}

interface IUser {
  id?: number;
  name?: string;
  lastName?: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}
