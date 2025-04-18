import mongoose, { Schema, Document } from 'mongoose';
import FeedContent, { IFeedContent } from '../models/FeedContent';

export interface IFeedLimitPojo extends Document {
    feedContents: Array<IFeedContent>;
}

const FeedLimitPojoSchema: Schema = new Schema({
    feedContents: { type: Array<mongoose.Schema.Types.ObjectId>, ref: FeedContent, required: true },
});


export default mongoose.model<IFeedLimitPojo>('FeedLimitPojo', FeedLimitPojoSchema);