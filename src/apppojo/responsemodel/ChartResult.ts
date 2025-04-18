import mongoose, { Schema, Document } from 'mongoose';
import ChartResponse, { IChartResponse } from './ChartResponse';

export interface IChartResult extends Document {
    totalRevenue: Array<IChartResponse>;
    todayRevenue: Array<IChartResponse>;
    monthlyRevenue: Array<IChartResponse>;
    monthWiseRevenue: Array<IChartResponse>;
    todaySubscription: Array<IChartResponse>;
    trialCounts: Array<IChartResponse>;
}

const ChartResultSchema: Schema = new Schema({
    totalRevenue: { type: Array<mongoose.Schema.Types.ObjectId>, ref: ChartResponse, required: true },
    todayRevenue: { type: Array<mongoose.Schema.Types.ObjectId>, ref: ChartResponse, required: true },
    monthlyRevenue: { type: Array<mongoose.Schema.Types.ObjectId>, ref: ChartResponse, required: true },
    monthWiseRevenue: { type: Array<mongoose.Schema.Types.ObjectId>, ref: ChartResponse, required: true },
    todaySubscription: { type: Array<mongoose.Schema.Types.ObjectId>, ref: ChartResponse, required: true },
    trialCounts: { type: Array<mongoose.Schema.Types.ObjectId>, ref: ChartResponse, required: true },
});


export default mongoose.model<IChartResult>('ChartResult', ChartResultSchema);