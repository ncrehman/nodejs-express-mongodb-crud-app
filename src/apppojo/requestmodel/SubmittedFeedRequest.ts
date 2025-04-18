import mongoose, { Schema, Document } from 'mongoose';

export interface ISubmittedFeedRequest extends Document {
    serviceId: string;
    date1: Date;
    date2: Date;
}

const SubmittedFeedRequestSchema: Schema = new Schema({
    serviceId: { type: String},
    date1: { type: Date},
    date2: { type: Date},
});


export default mongoose.model<ISubmittedFeedRequest>('SubmittedFeedRequest', SubmittedFeedRequestSchema);