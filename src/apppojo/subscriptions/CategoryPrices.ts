import mongoose, { Schema, Document } from 'mongoose';
import SubscriptionPack, { ISubscriptionPack } from './SubscriptionPack';
import Category, { ICategory } from '../models/Category';

export interface ICategoryPrices extends Document {
    id: string;
    subscriptionPackObj: ISubscriptionPack;
    categoryObj: ICategory;
    sdpServiceId: string;
    extraCharges: number;
    subscriptionPrice: number;
    createdDate: Date;
}

const CategoryPricesSchema: Schema = new Schema({
    id: { type: String},
    subscriptionPackObj: { type: mongoose.Schema.Types.ObjectId, ref: SubscriptionPack},
    categoryObj: { type: mongoose.Schema.Types.ObjectId, ref: Category},
    sdpServiceId: { type: String},
    extraCharges: { type: Number},
    subscriptionPrice: { type: Number},
    createdDate: { type: Date},
});


export default mongoose.model<ICategoryPrices>('CategoryPrices', CategoryPricesSchema);