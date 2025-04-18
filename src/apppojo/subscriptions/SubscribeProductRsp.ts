import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscribeProductRsp extends Document {
    result: string;
    resultDescription: string;
}

const SubscribeProductRspSchema: Schema = new Schema({
    result: { type: String},
    resultDescription: { type: String},
});


export default mongoose.model<ISubscribeProductRsp>('SubscribeProductRsp', SubscribeProductRspSchema);