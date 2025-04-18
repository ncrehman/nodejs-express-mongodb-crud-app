import mongoose, { Schema, Document } from 'mongoose';

export interface IPasswords extends Document {
    password: string;
    confirmpassword: string;
    mobileNumber: string;
}

const PasswordsSchema: Schema = new Schema({
    password: { type: String},
    confirmpassword: { type: String},
    mobileNumber: { type: String},
});


export default mongoose.model<IPasswords>('Passwords', PasswordsSchema);