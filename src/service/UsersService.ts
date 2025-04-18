import { IUsers } from '../apppojo/models/Users';
import { RequestModel } from '../apppojo/requestmodel/RequestModel';
import { ResponseModel } from '../apppojo/responsemodel/ResponseModel';

export interface UsersService {
  createUser(requestModel: RequestModel): Promise<ResponseModel>;
  updateUser(requestModel: RequestModel): Promise<ResponseModel>;
  deleteUser(requestModel: RequestModel): Promise<ResponseModel>;
  getAllUsers(requestModel: RequestModel): Promise<ResponseModel>;
  registerUser(user: IUsers): Promise<IUsers>;
  findUserByEmail(emailAddress: string): Promise<IUsers | null>;
}
