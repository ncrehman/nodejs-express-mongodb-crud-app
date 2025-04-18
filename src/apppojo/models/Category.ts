import mongoose, { Schema, Document } from 'mongoose';
import Languages, { ILanguages } from './Languages';

export interface ICategory extends Document {
    id: string;
    categoryName: string;
    description: string;
    alternateCategoryName: string;
    alternateDescription: string;
    categoryIconUrl: string;
    imageUrl: string;
    languageObj: ILanguages;
    serviceCount: number;
    showOnMobile: boolean;
    showOnWeb: boolean;
    createdDate: Date;
}

const CategorySchema: Schema = new Schema({
    id: { type: String},
    categoryName: { type: String},
    description: { type: String},
    alternateCategoryName: { type: String},
    alternateDescription: { type: String},
    categoryIconUrl: { type: String},
    imageUrl: { type: String},
    languageObj: { type: mongoose.Schema.Types.ObjectId, ref: Languages},
    serviceCount: { type: Number },
    showOnMobile: { type: Boolean,  default: false},
    showOnWeb: { type: Boolean,  default: false},
    createdDate: { type: Date},
},{collection: 'category'});


export default mongoose.model<ICategory>('Category', CategorySchema);