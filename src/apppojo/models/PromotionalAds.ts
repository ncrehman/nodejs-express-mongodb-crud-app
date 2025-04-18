import mongoose, { Schema, Document } from 'mongoose';

export interface IPromotionalAds extends Document {
    id: string;
    title: string;
    titleArabic: string;
    bannerUrl: string;
    createdDate: Date;
}

const PromotionalAdsSchema: Schema = new Schema({
    id: { type: String},
    title: { type: String},
    titleArabic: { type: String},
    bannerUrl: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<IPromotionalAds>('PromotionalAds', PromotionalAdsSchema);