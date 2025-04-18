import mongoose, { Schema, Document } from 'mongoose';

export interface ILoginRequest extends Document {
    userName: string;
    password: string;
    loginInterface: string;
    loginPlatform: string;
}

const LoginRequestSchema: Schema = new Schema({
    userName: { type: String},
    password: { type: String},
    loginInterface: { type: String},
    loginPlatform: { type: String},
});


export default mongoose.model<ILoginRequest>('LoginRequest', LoginRequestSchema);