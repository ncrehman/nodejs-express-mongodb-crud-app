import mongoose, { Schema, Document } from 'mongoose';
import PromotionalCategory, { IPromotionalCategory } from '../models/PromotionalCategory';
import PromotionalServices, { IPromotionalServices } from '../models/PromotionalServices';
import Category, { ICategory } from '../models/Category';
import CategoryResponse, { ICategoryResponse } from './CategoryResponse';
import FeedContent, { IFeedContent } from '../models/FeedContent';
import Languages, { ILanguages } from '../models/Languages';

export interface IPortalResponse extends Document {
    promotionalCategoryList: Array<IPromotionalCategory>;
    promotionalServicesesList: Array<IPromotionalServices>;
    categoryList: Array<ICategory>;
    catList: Array<ICategoryResponse>;
    feedList: Array<IFeedContent>;
    languagesList: Array<ILanguages>;
}

const PortalResponseSchema: Schema = new Schema({
    promotionalCategoryList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: PromotionalCategory, required: true },
    promotionalServicesesList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: PromotionalServices, required: true },
    categoryList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: Category, required: true },
    catList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: CategoryResponse, required: true },
    feedList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: FeedContent, required: true },
    languagesList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: Languages, required: true },
});


export default mongoose.model<IPortalResponse>('PortalResponse', PortalResponseSchema);