import mongoose, { Schema, Document } from 'mongoose';

export interface ISuccessResponse extends Document {
    status: number;
    message: string;
    response: string;
}

const SuccessResponseSchema: Schema = new Schema({
    status: { type: Number },
    message: { type: String},
    response: { type: String},
});


export default mongoose.model<ISuccessResponse>('SuccessResponse', SuccessResponseSchema);