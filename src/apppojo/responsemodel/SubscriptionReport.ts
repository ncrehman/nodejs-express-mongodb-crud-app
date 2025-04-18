import mongoose, { Schema, Document } from 'mongoose';
import Services, { IServices } from '../models/Services';
import Category, { ICategory } from '../models/Category';

export interface ISubscriptionReport extends Document {
    servicesList: Array<IServices>;
    categoryList: Array<ICategory>;
    subscriptionPackName: string;
    subscriptionType: string;
    fromDate: Date;
    toDate: Date;
}

const SubscriptionReportSchema: Schema = new Schema({
    servicesList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: Services, required: true },
    categoryList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: Category, required: true },
    subscriptionPackName: { type: String},
    subscriptionType: { type: String},
    fromDate: { type: Date},
    toDate: { type: Date},
});


export default mongoose.model<ISubscriptionReport>('SubscriptionReport', SubscriptionReportSchema);