import mongoose, { Schema, Document } from 'mongoose';
import FeedContent, { IFeedContent } from '../models/FeedContent';

export interface IServiceWiseContent extends Document {
    serviceName: string;
    serviceId: string;
    feedContent: Array<IFeedContent>;
}

const ServiceWiseContentSchema: Schema = new Schema({
    serviceName: { type: String},
    serviceId: { type: String},
    feedContent: { type: Array<mongoose.Schema.Types.ObjectId>, ref: FeedContent, required: true },
});


export default mongoose.model<IServiceWiseContent>('ServiceWiseContent', ServiceWiseContentSchema);