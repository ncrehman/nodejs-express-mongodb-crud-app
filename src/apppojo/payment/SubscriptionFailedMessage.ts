import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscriptionFailedMessage extends Document {
    id: string;
    mobileNumber: string;
    message: string;
    remarks: string;
    subscriptionReference: string;
    status: boolean;
    messageDate: Date;
    sentDate: Date;
}

const SubscriptionFailedMessageSchema: Schema = new Schema({
    id: { type: String},
    mobileNumber: { type: String},
    message: { type: String},
    remarks: { type: String},
    subscriptionReference: { type: String},
    status: { type: Boolean,  default: false},
    messageDate: { type: Date},
    sentDate: { type: Date},
});


export default mongoose.model<ISubscriptionFailedMessage>('SubscriptionFailedMessage', SubscriptionFailedMessageSchema);