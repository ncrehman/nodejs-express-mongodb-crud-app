import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedListRequest extends Document {
    serviceId: string;
    statusName: string;
    categoryId: string;
    fromDate: string;
    toDate: string;
    withImage: boolean;
}

const FeedListRequestSchema: Schema = new Schema({
    serviceId: { type: String},
    statusName: { type: String},
    categoryId: { type: String},
    fromDate: { type: String},
    toDate: { type: String},
    withImage: { type: Boolean,  default: false},
});


export default mongoose.model<IFeedListRequest>('FeedListRequest', FeedListRequestSchema);