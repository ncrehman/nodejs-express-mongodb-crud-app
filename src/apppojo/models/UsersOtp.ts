import mongoose, { Schema, Document } from 'mongoose';

export interface IUsersOtp extends Document {
    id: string;
    otp: string;
    message: string;
    userId: string;
    mobileNumber: string;
    fullName: string;
    isverified: boolean;
    emailAddress: string;
    roleName: string;
    createDate: Date;
}

const UsersOtpSchema: Schema = new Schema({
    id: { type: String},
    otp: { type: String},
    message: { type: String},
    userId: { type: String},
    mobileNumber: { type: String},
    fullName: { type: String},
    isverified: { type: Boolean,  default: false},
    emailAddress: { type: String},
    roleName: { type: String},
    createDate: { type: Date},
});


export default mongoose.model<IUsersOtp>('UsersOtp', UsersOtpSchema);