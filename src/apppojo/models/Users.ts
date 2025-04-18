import mongoose, { Schema, Document } from 'mongoose';
import Roles, { IRoles } from './Roles';
import Status, { IStatus } from './Status';

export interface IUsers extends Document {
    id: string;
    fullName: string;
    emailAddress: string;
    mobileNumber: string;
    profileImage: string;
    password: string;
    rolesObj: IRoles;
    statusObj: IStatus;
    isDeleted: boolean;
    loginAttempt: number;
    isOnline: boolean;
    lastLogin: Date;
    createdBy: string;
    updatedBy: string;
    updatedDate: Date;
    createdDate: Date;
}

const UsersSchema: Schema = new Schema({
    id: { type: String},
    fullName: { type: String},
    emailAddress: { type: String},
    mobileNumber: { type: String},
    profileImage: { type: String},
    password: { type: String},
    rolesObj: { type: mongoose.Schema.Types.ObjectId, ref: Roles},
    statusObj: { type: mongoose.Schema.Types.ObjectId, ref: Status},
    isDeleted: { type: Boolean,  default: false},
    loginAttempt: { type: Number },
    isOnline: { type: Boolean,  default: false},
    lastLogin: { type: Date},
    createdBy: { type: String},
    updatedBy: { type: String},
    updatedDate: { type: Date},
    createdDate: { type: Date},
});


export default mongoose.model<IUsers>('Users', UsersSchema);