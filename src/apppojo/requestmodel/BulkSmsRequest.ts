import mongoose, { Schema, Document } from 'mongoose';

export interface IBulkSmsRequest extends Document {
    message: string;
    mobileNumbers: Array<string>;
    source: string;
}

const BulkSmsRequestSchema: Schema = new Schema({
    message: { type: String},
    mobileNumbers: { type: Array<String>, ref: String, required: true },
    source: { type: String},
});


export default mongoose.model<IBulkSmsRequest>('BulkSmsRequest', BulkSmsRequestSchema);