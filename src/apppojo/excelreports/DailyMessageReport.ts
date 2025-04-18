import mongoose, { Schema, Document } from 'mongoose';

export interface IDailyMessageReport extends Document {
    serialNo: string;
    mobileNumber: string;
    date: string;
    serviceConnectionId: string;
    price: string;
    url: string;
    mt_id: string;
    user_id: string;
}

const DailyMessageReportSchema: Schema = new Schema({
    serialNo: { type: String},
    mobileNumber: { type: String},
    date: { type: String},
    serviceConnectionId: { type: String},
    price: { type: String},
    url: { type: String},
    mt_id: { type: String},
    user_id: { type: String},
});


export default mongoose.model<IDailyMessageReport>('DailyMessageReport', DailyMessageReportSchema);