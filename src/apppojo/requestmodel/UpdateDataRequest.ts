import mongoose, { Schema, Document } from 'mongoose';
import CompanyConfig, { ICompanyConfig } from '../models/CompanyConfig';
import Roles, { IRoles } from '../models/Roles';
import SendUpdateMail, { ISendUpdateMail } from '../models/SendUpdateMail';
import Services, { IServices } from '../models/Services';
import Status, { IStatus } from '../models/Status';
import Users, { IUsers } from '../models/Users';

export interface IUpdateDataRequest extends Document {
    update: boolean;
    companyConfigObj: ICompanyConfig;
    RolesObj: IRoles;
    sendupdateMailObj: ISendUpdateMail;
    serviceObj: IServices;
    statusObj: IStatus;
    usersObj: IUsers;
}

const UpdateDataRequestSchema: Schema = new Schema({
    update: { type: Boolean,  default: false},
    companyConfigObj: { type: mongoose.Schema.Types.ObjectId, ref: CompanyConfig},
    RolesObj: { type: mongoose.Schema.Types.ObjectId, ref: Roles},
    sendupdateMailObj: { type: mongoose.Schema.Types.ObjectId, ref: SendUpdateMail},
    serviceObj: { type: mongoose.Schema.Types.ObjectId, ref: Services},
    statusObj: { type: mongoose.Schema.Types.ObjectId, ref: Status},
    usersObj: { type: mongoose.Schema.Types.ObjectId, ref: Users},
});


export default mongoose.model<IUpdateDataRequest>('UpdateDataRequest', UpdateDataRequestSchema);