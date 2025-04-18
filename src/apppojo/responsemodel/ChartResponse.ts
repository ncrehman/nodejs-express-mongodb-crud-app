import mongoose, { Schema, Document } from 'mongoose';

export interface IChartResponse extends Document {
    revenue: number;
    totalOrder: number;
    monthNumber: number;
    year: number;
    month: string;
    isDelivered: boolean;
}

const ChartResponseSchema: Schema = new Schema({
    revenue: { type: Number},
    totalOrder: { type: Number },
    monthNumber: { type: Number },
    year: { type: Number },
    month: { type: String},
    isDelivered: { type: Boolean,  default: false},
});


export default mongoose.model<IChartResponse>('ChartResponse', ChartResponseSchema);