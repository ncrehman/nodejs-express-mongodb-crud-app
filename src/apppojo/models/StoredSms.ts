import mongoose, { Schema, Document } from 'mongoose';

export interface IStoredSms extends Document {
    id: string;
    mobileNumberList: Array<string>;
    message: string;
    status: boolean;
    sendDate: Date;
    createdDate: Date;
}

const StoredSmsSchema: Schema = new Schema({
    id: { type: String},
    mobileNumberList: { type: Array<String>, ref: String, required: true },
    message: { type: String},
    status: { type: Boolean,  default: false},
    sendDate: { type: Date},
    createdDate: { type: Date},
});


export default mongoose.model<IStoredSms>('StoredSms', StoredSmsSchema);