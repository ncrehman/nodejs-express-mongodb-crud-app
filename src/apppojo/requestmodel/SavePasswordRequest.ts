import mongoose, { Schema, Document } from 'mongoose';

export interface ISavePasswordRequest extends Document {
    mobileNumber: string;
    password: string;
}

const SavePasswordRequestSchema: Schema = new Schema({
    mobileNumber: { type: String},
    password: { type: String},
});


export default mongoose.model<ISavePasswordRequest>('SavePasswordRequest', SavePasswordRequestSchema);