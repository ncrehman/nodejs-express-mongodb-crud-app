import { UsersDao } from '../dao/UsersDao';
import { UsersDaoImpl } from '../daos/UsersDaoImpl';
import { UsersService } from '../service/UsersService';
import { IUsers } from '../apppojo/models/Users';
import { RequestModel } from '../apppojo/requestmodel/RequestModel';
import { ResponseModel } from '../apppojo/responsemodel/ResponseModel';
import { getResponseMessage, printLogs } from "../config/CommonService";
export class UsersServiceImpl implements UsersService {
    private userDao: UsersDao;

    constructor() {
        this.userDao = new UsersDaoImpl();
    }
    async getAllUsers(requestModel: RequestModel): Promise<ResponseModel> {
        const result: Array<IUsers> = await this.userDao.getAllUsers();
        const resonse: any = new ResponseModel();
        if (result != null) {
            resonse.message = await getResponseMessage('success');
            resonse.statusCode = 0;
            resonse.respArray = result;
        } else {
            resonse.message = "Failed to fetch users";
            resonse.statusCode = 1;
        }
        return resonse;
    }

    async createUser(request: RequestModel): Promise<ResponseModel> {
        const resonse: any = new ResponseModel();
        try {
            const userObj: IUsers = request.reqObject;
            const result: string = await this.userDao.createUser(userObj);
            if (result === 'Success') {
                resonse.message = await getResponseMessage('success');
                resonse.statusCode = 0;
                resonse.respObject = userObj;
            } else {
                resonse.message = result;
                resonse.statusCode = 1;
            }
        } catch (error) {
            // console.log('create user service eror: ', error)
            resonse.message = await getResponseMessage("errorcreating");
            resonse.statusCode = 11;
        } finally {
            printLogs('Create user', JSON.stringify(request), JSON.stringify(resonse), true);
        }
        return resonse;
    }
    async updateUser(request: RequestModel): Promise<ResponseModel> {
        const resonse: any = new ResponseModel();
        try {
            if (!!request.userId) {
                const userObj: IUsers = request.reqObject;
                const result: string = await this.userDao.updateUser(userObj, request.userId);
                if (result === 'Success') {
                    resonse.message = await getResponseMessage('success');
                    resonse.statusCode = 0;
                    resonse.respObject = userObj;
                } else {
                    resonse.message = result;
                    resonse.statusCode = 1;
                }
            } else {
                resonse.message = await getResponseMessage('provideLoginId');
                resonse.statusCode = 2;
            }

        } catch (error) {
            // console.log('create user service eror: ', error)
            resonse.message = await getResponseMessage("errorcreating");
            resonse.statusCode = 11;
        } finally {
            printLogs('update user', JSON.stringify(request), JSON.stringify(resonse), true);
        }
        return resonse;
    }
    async deleteUser(request: RequestModel): Promise<ResponseModel> {
        const resonse: any = new ResponseModel();
        try {
            if (!!request.userId) {
                const userObj: IUsers = request.reqObject;
                const result: string = await this.userDao.deleteUser(userObj, request.userId);
                if (result === 'Success') {
                    resonse.message = await getResponseMessage('success');
                    resonse.statusCode = 0;
                    resonse.respObject = userObj;
                } else {
                    resonse.message = result;
                    resonse.statusCode = 1;
                }
            } else {
                resonse.message = await getResponseMessage('provideLoginId');
                resonse.statusCode = 2;
            }

        } catch (error) {
            // console.log('create user service eror: ', error)
            resonse.message = await getResponseMessage("errorcreating");
            resonse.statusCode = 11;
        } finally {
            printLogs('delete user', JSON.stringify(request), JSON.stringify(resonse), true);
        }
        return resonse;
    }
    async registerUser(user: IUsers): Promise<IUsers> {
        return null;
    }

    async findUserByEmail(email: string): Promise<IUsers | null> {
        return await this.userDao.getUserByEmail(email);
    }
}
