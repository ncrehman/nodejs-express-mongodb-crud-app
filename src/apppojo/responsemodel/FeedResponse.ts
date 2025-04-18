import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedResponse extends Document {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    imageUrl: string;
}

const FeedResponseSchema: Schema = new Schema({
    id: { type: String},
    title: { type: String},
    shortDescription: { type: String},
    description: { type: String},
    imageUrl: { type: String},
});


export default mongoose.model<IFeedResponse>('FeedResponse', FeedResponseSchema);