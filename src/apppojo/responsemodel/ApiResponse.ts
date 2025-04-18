import mongoose, { Schema, Document } from 'mongoose';

export interface IApiResponse extends Document {
    status: number;
    message: string;
    data: any;
}

const ApiResponseSchema: Schema = new Schema({
    status: { type: Number },
    message: { type: String},
    data: { type: any},
});


export default mongoose.model<IApiResponse>('ApiResponse', ApiResponseSchema);