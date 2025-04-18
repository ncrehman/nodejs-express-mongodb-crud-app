import mongoose, { Schema, Document } from 'mongoose';

export interface IDailyExcelReport extends Document {
    serialNo: string;
    customerMobileNumber: string;
    date: string;
    categoryName: string;
    ServiceName: string;
    subscriptionpack: string;
    sdpServiceId: string;
    price: string;
    billingStatus: string;
    refundStatus: string;
    chargingReference: string;
    refundReference: string;
    remarks: string;
}

const DailyExcelReportSchema: Schema = new Schema({
    serialNo: { type: String},
    customerMobileNumber: { type: String},
    date: { type: String},
    categoryName: { type: String},
    ServiceName: { type: String},
    subscriptionpack: { type: String},
    sdpServiceId: { type: String},
    price: { type: String},
    billingStatus: { type: String},
    refundStatus: { type: String},
    chargingReference: { type: String},
    refundReference: { type: String},
    remarks: { type: String},
});


export default mongoose.model<IDailyExcelReport>('DailyExcelReport', DailyExcelReportSchema);