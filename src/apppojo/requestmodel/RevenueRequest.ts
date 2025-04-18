import mongoose, { Schema, Document } from 'mongoose';

export interface IRevenueRequest extends Document {
    amount: number;
    chargingStatus: boolean;
    _id: string;
}

const RevenueRequestSchema: Schema = new Schema({
    amount: { type: Number},
    chargingStatus: { type: Boolean,  default: false},
    _id: { type: String},
});


export default mongoose.model<IRevenueRequest>('RevenueRequest', RevenueRequestSchema);