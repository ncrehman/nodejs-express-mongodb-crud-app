import mongoose, { Schema, Document } from 'mongoose';

export interface IDashboardCount extends Document {
    usercount: number;
    servicecount: number;
    feedscount: number;
    todaycount: number;
    customerCount: number;
    fetchedDate: Date;
}

const DashboardCountSchema: Schema = new Schema({
    usercount: { type: Number},
    servicecount: { type: Number},
    feedscount: { type: Number},
    todaycount: { type: Number},
    customerCount: { type: Number},
    fetchedDate: { type: Date},
});


export default mongoose.model<IDashboardCount>('DashboardCount', DashboardCountSchema);