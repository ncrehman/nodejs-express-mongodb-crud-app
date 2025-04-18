import mongoose, { Schema, Document } from 'mongoose';

export interface ISmsReminder extends Document {
    id: string;
    smsPeriod: string;
    status: boolean;
    smsType: string;
    deliveryTime: Date;
    deliveryTimeString: string;
    subscribedFrequency: string;
    arabicMessage: string;
    englishMessage: string;
    startDate: Date;
    nextDeliveryDate: Date;
    createdDate: Date;
}

const SmsReminderSchema: Schema = new Schema({
    id: { type: String},
    smsPeriod: { type: String},
    status: { type: Boolean,  default: false},
    smsType: { type: String},
    deliveryTime: { type: Date},
    deliveryTimeString: { type: String},
    subscribedFrequency: { type: String},
    arabicMessage: { type: String},
    englishMessage: { type: String},
    startDate: { type: Date},
    nextDeliveryDate: { type: Date},
    createdDate: { type: Date},
});


export default mongoose.model<ISmsReminder>('SmsReminder', SmsReminderSchema);