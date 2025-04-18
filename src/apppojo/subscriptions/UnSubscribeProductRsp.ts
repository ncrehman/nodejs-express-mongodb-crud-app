import mongoose, { Schema, Document } from 'mongoose';

export interface IUnSubscribeProductRsp extends Document {
    result: string;
    resultDescription: string;
}

const UnSubscribeProductRspSchema: Schema = new Schema({
    result: { type: String},
    resultDescription: { type: String},
});


export default mongoose.model<IUnSubscribeProductRsp>('UnSubscribeProductRsp', UnSubscribeProductRspSchema);