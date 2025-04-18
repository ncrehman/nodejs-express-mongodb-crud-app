import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscriptionReport extends Document {
    categoryList: Array<string>;
    mobileNumber: string;
    fromDate: string;
    toDate: string;
    limit: number;
    offset: number;
}

const SubscriptionReportSchema: Schema = new Schema({
    categoryList: { type: Array<String>, ref: String, required: true },
    mobileNumber: { type: String},
    fromDate: { type: String},
    toDate: { type: String},
    limit: { type: Number },
    offset: { type: Number },
});


export default mongoose.model<ISubscriptionReport>('SubscriptionReport', SubscriptionReportSchema);