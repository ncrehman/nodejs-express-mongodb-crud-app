import mongoose, { Schema, Document } from 'mongoose';
import UnsubProductInitialBody, { IUnsubProductInitialBody } from './UnsubProductInitialBody';

export interface IUnSubscribeProductReturn extends Document {
    body: IUnsubProductInitialBody;
}

const UnSubscribeProductReturnSchema: Schema = new Schema({
    body: { type: mongoose.Schema.Types.ObjectId, ref: UnsubProductInitialBody},
});


export default mongoose.model<IUnSubscribeProductReturn>('UnSubscribeProductReturn', UnSubscribeProductReturnSchema);