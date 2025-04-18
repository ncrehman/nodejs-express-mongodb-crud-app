import mongoose, { Schema, Document } from 'mongoose';

export interface ISuccessMessage extends Document {
    id: string;
    customerId: string;
    mobileNumber: string;
    message: string;
    isDelivered: boolean;
    messageId: string;
    date: string;
    period: string;
    createdDate: Date;
}

const SuccessMessageSchema: Schema = new Schema({
    id: { type: String},
    customerId: { type: String},
    mobileNumber: { type: String},
    message: { type: String},
    isDelivered: { type: Boolean,  default: false},
    messageId: { type: String},
    date: { type: String},
    period: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<ISuccessMessage>('SuccessMessage', SuccessMessageSchema);