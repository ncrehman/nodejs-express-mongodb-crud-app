import mongoose, { Schema, Document } from 'mongoose';
import Customers, { ICustomers } from './Customers';

export interface ICustomersOtp extends Document {
    id: string;
    customerObj: ICustomers;
    otp: string;
    message: string;
    sentDate: Date;
    expiryDate: Date;
    validated: boolean;
    validateDate: Date;
}

const CustomersOtpSchema: Schema = new Schema({
    id: { type: String},
    customerObj: { type: mongoose.Schema.Types.ObjectId, ref: Customers},
    otp: { type: String},
    message: { type: String},
    sentDate: { type: Date},
    expiryDate: { type: Date},
    validated: { type: Boolean,  default: false},
    validateDate: { type: Date},
});


export default mongoose.model<ICustomersOtp>('CustomersOtp', CustomersOtpSchema);