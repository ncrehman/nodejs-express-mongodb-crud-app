import { IUsers } from '../apppojo/models/Users';

export interface UsersDao {
  createUser(user: IUsers): Promise<string>;
  updateUser(user: IUsers,operatorId:string): Promise<string>;
  deleteUser(user: IUsers,operatorId:string): Promise<string>;
  getAllUsers(): Promise<Array<IUsers>>;
  getUserByEmail(email: string): Promise<IUsers | null>;
}
