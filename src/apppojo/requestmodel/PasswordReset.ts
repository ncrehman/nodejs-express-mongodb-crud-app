import mongoose, { Schema, Document } from 'mongoose';

export interface IPasswordReset extends Document {
    resetActionUserId: string;
    userId: string;
    password: string;
    confirmPassword: string;
}

const PasswordResetSchema: Schema = new Schema({
    resetActionUserId: { type: String},
    userId: { type: String},
    password: { type: String},
    confirmPassword: { type: String},
});


export default mongoose.model<IPasswordReset>('PasswordReset', PasswordResetSchema);