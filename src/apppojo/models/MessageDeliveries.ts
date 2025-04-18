import mongoose, { Schema, Document } from 'mongoose';

export interface IMessageDeliveries extends Document {
    id: string;
    source: string;
    mobileNumber: string;
    message: string;
    messageId: string;
    deliveryState: string;
    isDelivered: boolean;
    messageDate: Date;
    retryDate: Date;
    createdDate: Date;
}

const MessageDeliveriesSchema: Schema = new Schema({
    id: { type: String},
    source: { type: String},
    mobileNumber: { type: String},
    message: { type: String},
    messageId: { type: String},
    deliveryState: { type: String},
    isDelivered: { type: Boolean,  default: false},
    messageDate: { type: Date},
    retryDate: { type: Date},
    createdDate: { type: Date},
});


export default mongoose.model<IMessageDeliveries>('MessageDeliveries', MessageDeliveriesSchema);