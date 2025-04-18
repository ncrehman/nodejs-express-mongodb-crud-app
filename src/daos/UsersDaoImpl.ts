import Users, { IUsers } from '../apppojo/models/Users';
import { UsersDao } from '../dao/UsersDao';
import { getResponseMessage, printLogs } from '../config/CommonService';

export class UsersDaoImpl implements UsersDao {

  async createUser(user: IUsers): Promise<string> {
    let result: string = null;
    try {
      const response = await Users.create(user);
      result = "Success";
    } catch (error: any) {
      if (error.code == 11000) {
        let dupField = Object.keys(error.keyValue)[0];
        dupField = dupField.charAt(0).toUpperCase() + dupField.slice(1);
        dupField = dupField.replace(/([A-Z])/g, ' $1').trim();
        const message = await getResponseMessage('duplicate');
        result = dupField + ' ' + message;
      } else {
        result = error.message;
      }
    }
    return result;
  }
  async updateUser(user: IUsers, operatorId: string): Promise<string> {
    let result: string = null;
    try {
      const query: any = {};
      query._id = user._id;
      query.isDeleted = true;
      const userss = await Users.findOne(query);
      if (!!userss) {
        result = await getResponseMessage('cannotupdateRestore');
      } else {
        const filter = { _id: user._id }; // Filter criteria
        const updatedFields: any = {};
        if (!!user.fullName && user.fullName != '') {
          updatedFields.fullName = user.fullName;
        }
        if (!!user.emailAddress && user.emailAddress != '') {
          updatedFields.emailAddress = user.emailAddress;
        }
        if (!!user.mobileNumber && user.mobileNumber != '') {
          updatedFields.mobileNumber = user.mobileNumber;
        }
        if (!!user.profileImage && user.profileImage != '') {
          updatedFields.profileImage = user.profileImage;
        }
        if (!!user.isDeleted && user.isDeleted != null) {
          updatedFields.isDeleted = user.isDeleted;
        }
        if (!!user.password && user.password != '') {
          updatedFields.password = user.password;
        }
        if (!!user.rolesObj && user.rolesObj != null) {
          updatedFields.rolesObj = user.rolesObj;
        }
        if (!!user.statusObj && user.statusObj != null) {
          updatedFields.statusObj = user.statusObj;
        }
        if (!!user.loginAttempt && user.loginAttempt > 0) {
          updatedFields.loginAttempt = user.loginAttempt;
        }
        if (!!user.isOnline && user.isOnline != null) {
          updatedFields.isOnline = user.isOnline;
        }
        if (!!user.lastLogin && user.lastLogin != null) {
          updatedFields.lastLogin = user.lastLogin;
        }
        if (!!user.updatedBy && user.updatedBy != '') {
          updatedFields.updatedBy = user.updatedBy;
        }
        updatedFields.updatedDate = new Date();

        const update = {
          $set: updatedFields,
        };

        await Users.updateOne(filter, update, {
          new: true, // Return updated document
          runValidators: true, // Ensure validation rules are applied
        });
        result = "Success";
      }


    } catch (error: any) {
      if (error.code == 11000) {
        let dupField = Object.keys(error.keyValue)[0];
        dupField = dupField.charAt(0).toUpperCase() + dupField.slice(1);
        dupField = dupField.replace(/([A-Z])/g, ' $1').trim();
        const message = await getResponseMessage('duplicate');
        result = dupField + ' ' + message;
      } else {
        result = error.message;
      }
    }
    return result;
  }
  async deleteUser(user: IUsers, operatorId: string): Promise<string> {
    let result: string = null;
    try {
      const query: any = {};
      query._id = user._id;
      query.isDeleted = true;
      const userss = await Users.findOne(query);
      if (!!userss) {
        result = await getResponseMessage('alreadyDeleted');
      } else {
        const filter = { _id: user._id }; // Filter criteria
        const update = {
          $set: {
            isDeleted: true,
            updatedBy: operatorId,
            updatedDate: new Date(),
          },
        };

        await Users.updateOne(filter, update, {
          new: true, // Return updated document
          runValidators: true, // Ensure validation rules are applied
        });
        result = "Success";
      }
    } catch (error: any) {
      if (error.code == 11000) {
        let dupField = Object.keys(error.keyValue)[0];
        dupField = dupField.charAt(0).toUpperCase() + dupField.slice(1);
        dupField = dupField.replace(/([A-Z])/g, ' $1').trim();
        const message = await getResponseMessage('duplicate');
        result = dupField + ' ' + message;
      } else {
        result = error.message;
      }
    }
    return result;
  }
  async getAllUsers(): Promise<Array<IUsers>> {
    let result: Array<IUsers>;
    try {
      const query: any = {};
      // query.mobileNumber = "9292929292";
      result = await Users.find(query)
        .populate('rolesObj')
        .populate({ path: "statusObj", model: "Status", select: "statusName usedFor" });

      // .populate('statusObj','statusName','usedFor');
    } catch (error) {
      printLogs('get All Users', '', error, true)
      result = null;
    }
    return result;
  }

  async getUserByEmail(emailAddress: string): Promise<IUsers | null> {
    console.log('emal add: ' + emailAddress)

    try {
      // Define the query object dynamically
      const query: any = {};
      query.emailAddress = emailAddress;
      console.log('query add: ' + JSON.stringify(query));
      const result = await Users.aggregate([
        { $match: { emailAddress } },
        {
          $lookup: {
            from: 'roles',
            localField: 'rolesObj.$id',
            foreignField: '_id',
            as: 'rolesObj'
          }
        },
        {
          $lookup: {
            from: 'status',
            localField: 'statusObj.$id',
            foreignField: '_id',
            as: 'statusObj'
          }
        },
        { $unwind: '$rolesObj' },
        { $unwind: '$statusObj' }
      ]);

      // console.log('res: ',result[0])

      // Find the user that matches the query
      // const user = await UserModel.findOne(query);
      // const users = await Users.findOne(query)
      //   .exec();
      // console.log('Users with populated data:', users);

      return result[0];
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
}
