import mongoose, { Schema, Document } from 'mongoose';

export interface ILoginResponse extends Document {
    loginId: string;
    fetchId: string;
    loginName: string;
    emailAddress: string;
    mobileNumber: string;
    profileImage: string;
    rolesName: string;
    rolesLevel: number;
}

const LoginResponseSchema: Schema = new Schema({
    loginId: { type: String},
    fetchId: { type: String},
    loginName: { type: String},
    emailAddress: { type: String},
    mobileNumber: { type: String},
    profileImage: { type: String},
    rolesName: { type: String},
    rolesLevel: { type: Number },
});


export default mongoose.model<ILoginResponse>('LoginResponse', LoginResponseSchema);