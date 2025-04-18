import mongoose, { Schema, Document } from 'mongoose';

export interface IAdminUserRequest extends Document {
    rolesName: string;
    rolesLevel: number;
    userType: string;
    loginId: string;
    platform: string;
}

const AdminUserRequestSchema: Schema = new Schema({
    rolesName: { type: String},
    rolesLevel: { type: Number },
    userType: { type: String},
    loginId: { type: String},
    platform: { type: String},
});


export default mongoose.model<IAdminUserRequest>('AdminUserRequest', AdminUserRequestSchema);