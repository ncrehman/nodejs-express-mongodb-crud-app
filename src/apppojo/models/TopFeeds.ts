import mongoose, { Schema, Document } from 'mongoose';
import FeedContent, { IFeedContent } from './FeedContent';
import Services, { IServices } from './Services';

export interface ITopFeeds extends Document {
    id: string;
    feedcontentObj: IFeedContent;
    serviceObj: IServices;
    updated: boolean;
    createdDate: Date;
    modifiedDate: Date;
}

const TopFeedsSchema: Schema = new Schema({
    id: { type: String},
    feedcontentObj: { type: mongoose.Schema.Types.ObjectId, ref: FeedContent},
    serviceObj: { type: mongoose.Schema.Types.ObjectId, ref: Services},
    updated: { type: Boolean,  default: false},
    createdDate: { type: Date},
    modifiedDate: { type: Date},
});


export default mongoose.model<ITopFeeds>('TopFeeds', TopFeedsSchema);