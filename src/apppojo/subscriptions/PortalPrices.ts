import mongoose, { Schema, Document } from 'mongoose';
import SubscriptionPack, { ISubscriptionPack } from './SubscriptionPack';

export interface IPortalPrices extends Document {
    id: string;
    sdpServiceId: string;
    productId: string;
    subscriptionPackObj: ISubscriptionPack;
    currency: string;
    currencyArabic: string;
    packCategoryName: string;
    packCategoryNameArabic: string;
    subscriptionPrice: number;
    subscriptionPriceArabic: string;
    extraCharges: number;
    extraChargesArabic: string;
    createdDate: Date;
}

const PortalPricesSchema: Schema = new Schema({
    id: { type: String},
    sdpServiceId: { type: String},
    productId: { type: String},
    subscriptionPackObj: { type: mongoose.Schema.Types.ObjectId, ref: SubscriptionPack},
    currency: { type: String},
    currencyArabic: { type: String},
    packCategoryName: { type: String},
    packCategoryNameArabic: { type: String},
    subscriptionPrice: { type: Number},
    subscriptionPriceArabic: { type: String},
    extraCharges: { type: Number},
    extraChargesArabic: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<IPortalPrices>('PortalPrices', PortalPricesSchema);