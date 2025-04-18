import mongoose, { Schema, Document } from 'mongoose';

export interface INotificationReq extends Document {
    id: string;
    isUpdated: boolean;
    createdDate: Date;
    msisdn: string;
    subdate: string;
    expire_date: string;
    status: string;
}

const NotificationReqSchema: Schema = new Schema({
    id: { type: String},
    isUpdated: { type: Boolean,  default: false},
    createdDate: { type: Date},
    msisdn: { type: String},
    subdate: { type: String},
    expire_date: { type: String},
    status: { type: String},
});


export default mongoose.model<INotificationReq>('NotificationReq', NotificationReqSchema);