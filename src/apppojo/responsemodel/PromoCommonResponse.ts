import mongoose, { Schema, Document } from 'mongoose';

export interface IPromoCommonResponse extends Document {
    title: string;
    banner: string;
    description: string;
    promoType: string;
    promoTypeId: string;
}

const PromoCommonResponseSchema: Schema = new Schema({
    title: { type: String},
    banner: { type: String},
    description: { type: String},
    promoType: { type: String},
    promoTypeId: { type: String},
});


export default mongoose.model<IPromoCommonResponse>('PromoCommonResponse', PromoCommonResponseSchema);