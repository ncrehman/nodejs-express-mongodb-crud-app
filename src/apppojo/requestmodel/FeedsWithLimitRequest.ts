import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedsWithLimitRequest extends Document {
    feedLimit: number;
    serviceId: string;
}

const FeedsWithLimitRequestSchema: Schema = new Schema({
    feedLimit: { type: Number },
    serviceId: { type: String},
});


export default mongoose.model<IFeedsWithLimitRequest>('FeedsWithLimitRequest', FeedsWithLimitRequestSchema);