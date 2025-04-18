import mongoose, { Schema, Document } from 'mongoose';

export interface IMonthlyRevenue extends Document {
    id: string;
    monthName: string;
    year: string;
    revenuePeriod: string;
    revenue: number;
    totalSucess: number;
    createdDate: Date;
}

const MonthlyRevenueSchema: Schema = new Schema({
    id: { type: String},
    monthName: { type: String},
    year: { type: String},
    revenuePeriod: { type: String},
    revenue: { type: Number},
    totalSucess: { type: Number },
    createdDate: { type: Date},
});


export default mongoose.model<IMonthlyRevenue>('MonthlyRevenue', MonthlyRevenueSchema);