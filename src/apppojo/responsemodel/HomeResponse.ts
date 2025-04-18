import mongoose, { Schema, Document } from 'mongoose';
import PromoCommonResponse, { IPromoCommonResponse } from './PromoCommonResponse';
import CategoryResponse, { ICategoryResponse } from './CategoryResponse';
import FeedContentResponse, { IFeedContentResponse } from './FeedContentResponse';
import Languages, { ILanguages } from '../models/Languages';

export interface IHomeResponse extends Document {
    promoList: Array<IPromoCommonResponse>;
    categoryList: Array<ICategoryResponse>;
    feedList: Array<IFeedContentResponse>;
    languagesList: Array<ILanguages>;
    idList: Array<string>;
}

const HomeResponseSchema: Schema = new Schema({
    promoList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: PromoCommonResponse, required: true },
    categoryList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: CategoryResponse, required: true },
    feedList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: FeedContentResponse, required: true },
    languagesList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: Languages, required: true },
    idList: { type: Array<String>, ref: String, required: true },
});


export default mongoose.model<IHomeResponse>('HomeResponse', HomeResponseSchema);