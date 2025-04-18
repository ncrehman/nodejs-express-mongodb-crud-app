import mongoose, { Schema, Document } from 'mongoose';
import AmountInfo, { IAmountInfo } from '../checksubscription/AmountInfo';

export interface IAmountInfos extends Document {
    amountInfo: IAmountInfo;
}

const AmountInfosSchema: Schema = new Schema({
    amountInfo: { type: mongoose.Schema.Types.ObjectId, ref: AmountInfo},
});


export default mongoose.model<IAmountInfos>('AmountInfos', AmountInfosSchema);