import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomerExpiryMessages extends Document {
    id: string;
    customerId: string;
    mobileNumber: string;
    messageId: string;
    message: string;
    isDelivered: boolean;
    description: string;
    messageDate: Date;
}

const CustomerExpiryMessagesSchema: Schema = new Schema({
    id: { type: String},
    customerId: { type: String},
    mobileNumber: { type: String},
    messageId: { type: String},
    message: { type: String},
    isDelivered: { type: Boolean,  default: false},
    description: { type: String},
    messageDate: { type: Date},
});


export default mongoose.model<ICustomerExpiryMessages>('CustomerExpiryMessages', CustomerExpiryMessagesSchema);