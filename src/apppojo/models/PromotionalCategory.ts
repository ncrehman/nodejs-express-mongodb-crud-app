import mongoose, { Schema, Document } from 'mongoose';
import Category, { ICategory } from './Category';

export interface IPromotionalCategory extends Document {
    id: string;
    promotionName: string;
    promotionNameArabic: string;
    bannerUrl: string;
    languageId: string;
    categoryObj: ICategory;
    createdDate: Date;
}

const PromotionalCategorySchema: Schema = new Schema({
    id: { type: String},
    promotionName: { type: String},
    promotionNameArabic: { type: String},
    bannerUrl: { type: String},
    languageId: { type: String},
    categoryObj: { type: mongoose.Schema.Types.ObjectId, ref: Category},
    createdDate: { type: Date},
});


export default mongoose.model<IPromotionalCategory>('PromotionalCategory', PromotionalCategorySchema);