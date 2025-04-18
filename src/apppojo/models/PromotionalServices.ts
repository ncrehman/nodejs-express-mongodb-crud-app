import mongoose, { Schema, Document } from 'mongoose';
import Services, { IServices } from './Services';

export interface IPromotionalServices extends Document {
    id: string;
    promotionName: string;
    promotionNameArabic: string;
    bannerUrl: string;
    serviceObj: IServices;
    createdDate: Date;
}

const PromotionalServicesSchema: Schema = new Schema({
    id: { type: String},
    promotionName: { type: String},
    promotionNameArabic: { type: String},
    bannerUrl: { type: String},
    serviceObj: { type: mongoose.Schema.Types.ObjectId, ref: Services},
    createdDate: { type: Date},
});


export default mongoose.model<IPromotionalServices>('PromotionalServices', PromotionalServicesSchema);