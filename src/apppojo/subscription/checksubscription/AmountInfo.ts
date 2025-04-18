import mongoose, { Schema, Document } from 'mongoose';

export interface IAmountInfo extends Document {
    totalAmount: number;
    unit: number;
    usableAmount: number;
    objectID: string;
    objectType: number;
}

const AmountInfoSchema: Schema = new Schema({
    totalAmount: { type: Number},
    unit: { type: Number},
    usableAmount: { type: Number},
    objectID: { type: String},
    objectType: { type: Number},
});


export default mongoose.model<IAmountInfo>('AmountInfo', AmountInfoSchema);