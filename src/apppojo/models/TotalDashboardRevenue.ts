import mongoose, { Schema, Document } from 'mongoose';
import ChartResponse, { IChartResponse } from '../responsemodel/ChartResponse';

export interface ITotalDashboardRevenue extends Document {
    id: string;
    totalRevenue: number;
    oneMonthRevenue: number;
    todayRevenue: number;
    todaySubscription: number;
    todayRenewal: number;
    todayFailedRenewal: number;
    servicecount: number;
    feedscount: number;
    customerCount: number;
    trialCount: number;
    activeCustomer: number;
    subscribedCustomer: number;
    chargedCustomer: number;
    newcustomerCount: number;
    sentMessage: number;
    failedMessage: number;
    createdDate: Date;
    date: string;
    monthlyChart: Array<IChartResponse>;
}

const TotalDashboardRevenueSchema: Schema = new Schema({
    id: { type: String},
    totalRevenue: { type: Number},
    oneMonthRevenue: { type: Number},
    todayRevenue: { type: Number},
    todaySubscription: { type: Number},
    todayRenewal: { type: Number},
    todayFailedRenewal: { type: Number},
    servicecount: { type: Number},
    feedscount: { type: Number},
    customerCount: { type: Number},
    trialCount: { type: Number},
    activeCustomer: { type: Number},
    subscribedCustomer: { type: Number},
    chargedCustomer: { type: Number},
    newcustomerCount: { type: Number},
    sentMessage: { type: Number},
    failedMessage: { type: Number},
    createdDate: { type: Date},
    date: { type: String},
    monthlyChart: { type: Array<mongoose.Schema.Types.ObjectId>, ref: ChartResponse, required: true },
});


export default mongoose.model<ITotalDashboardRevenue>('TotalDashboardRevenue', TotalDashboardRevenueSchema);