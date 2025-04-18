import mongoose, { Schema, Document } from 'mongoose';

export interface ISingleMessageRequest extends Document {
    mobileNumber: string;
    message: string;
    source: string;
    serviceId: string;
}

const SingleMessageRequestSchema: Schema = new Schema({
    mobileNumber: { type: String},
    message: { type: String},
    source: { type: String},
    serviceId: { type: String},
});


export default mongoose.model<ISingleMessageRequest>('SingleMessageRequest', SingleMessageRequestSchema);