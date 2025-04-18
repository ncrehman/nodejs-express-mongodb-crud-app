import mongoose, { Schema, Document } from 'mongoose';

export interface IDailyRevenue extends Document {
    id: string;
    month: string;
    year: number;
    billingPeriod: string;
    dateString: string;
    amount: number;
    failed: number;
    subscription: number;
    success: number;
    totalRecords: number;
    servicecount: number;
    feedscount: number;
    customerCount: number;
    trialCount: number;
    subscribedCustomer: number;
    newcustomerCount: number;
    localDate: string;
    createdDate: Date;
}

const DailyRevenueSchema: Schema = new Schema({
    id: { type: String},
    month: { type: String},
    year: { type: Number },
    billingPeriod: { type: String},
    dateString: { type: String},
    amount: { type: Number},
    failed: { type: Number},
    subscription: { type: Number},
    success: { type: Number},
    totalRecords: { type: Number},
    servicecount: { type: Number},
    feedscount: { type: Number},
    customerCount: { type: Number},
    trialCount: { type: Number},
    subscribedCustomer: { type: Number},
    newcustomerCount: { type: Number},
    localDate: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<IDailyRevenue>('DailyRevenue', DailyRevenueSchema);