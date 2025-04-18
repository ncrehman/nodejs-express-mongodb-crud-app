import { Request, Response } from 'express';
import { UsersService } from '../service/UsersService';
import { UsersServiceImpl } from '../services/UsersServiceImpl';
import { IUsers } from '../apppojo/models/Users';
import { RequestModel } from '../apppojo/requestmodel/RequestModel';
import { ResponseModel } from '../apppojo/responsemodel/ResponseModel';
export class UsersController {
    private userService: UsersService;

    constructor() {
        this.userService = new UsersServiceImpl();
    }

    async createUser(req: Request, res: Response): Promise<void> {
        const requesModel: RequestModel = req.body;
        try {
            const response: ResponseModel = await this.userService.createUser(requesModel);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
    async updateUser(req: Request, res: Response): Promise<void> {
        const requesModel: RequestModel = req.body;
        try {
            const response: ResponseModel = await this.userService.updateUser(requesModel);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
    async deleteUser(req: Request, res: Response): Promise<void> {
        const requesModel: RequestModel = req.body;
        try {
            const response: ResponseModel = await this.userService.deleteUser(requesModel);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
    async getAllUsrs(req: Request, res: Response): Promise<void> {
        const requesModel: RequestModel = req.body;
     
        try {
            const response: ResponseModel = await this.userService.getAllUsers(requesModel);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
    async registerUser(req: Request, res: Response): Promise<void> {
        const { fullName, emailAddress, mobileNumber } = req.body;

        try {
            const user: IUsers = await this.userService.registerUser({ fullName, emailAddress, mobileNumber } as IUsers);
            res.status(201).json(user);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        const { email } = req.params;

        try {
            const user = await this.userService.findUserByEmail(email);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
