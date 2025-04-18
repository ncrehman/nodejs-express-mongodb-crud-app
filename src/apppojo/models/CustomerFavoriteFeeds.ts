import mongoose, { Schema, Document } from 'mongoose';
import Customers, { ICustomers } from './Customers';
import FeedContent, { IFeedContent } from './FeedContent';

export interface ICustomerFavoriteFeeds extends Document {
    id: string;
    customerObj: ICustomers;
    feedList: Array<IFeedContent>;
}

const CustomerFavoriteFeedsSchema: Schema = new Schema({
    id: { type: String},
    customerObj: { type: mongoose.Schema.Types.ObjectId, ref: Customers},
    feedList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: FeedContent, required: true },
});


export default mongoose.model<ICustomerFavoriteFeeds>('CustomerFavoriteFeeds', CustomerFavoriteFeedsSchema);