import mongoose, { Schema, Document } from 'mongoose';
import FeedContent, { IFeedContent } from '../models/FeedContent';

export interface IFavoriteFeedRequest extends Document {
    customerId: string;
    feedContent: IFeedContent;
}

const FavoriteFeedRequestSchema: Schema = new Schema({
    customerId: { type: String},
    feedContent: { type: mongoose.Schema.Types.ObjectId, ref: FeedContent},
});


export default mongoose.model<IFavoriteFeedRequest>('FavoriteFeedRequest', FavoriteFeedRequestSchema);