import mongoose, { Schema, Document } from 'mongoose';
import UnSubscribeProductResponse, { IUnSubscribeProductResponse } from './UnSubscribeProductResponse';

export interface IUnsubProductInitialBody extends Document {
    unSubscribeProductResponse: IUnSubscribeProductResponse;
}

const UnsubProductInitialBodySchema: Schema = new Schema({
    unSubscribeProductResponse: { type: mongoose.Schema.Types.ObjectId, ref: UnSubscribeProductResponse},
});


export default mongoose.model<IUnsubProductInitialBody>('UnsubProductInitialBody', UnsubProductInitialBodySchema);