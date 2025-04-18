import mongoose, { Schema, Document } from 'mongoose';

export interface IRefundReportExcel extends Document {
    serialNo: string;
    customerMobileNumber: string;
    description: string;
    refundAmount: string;
    refundRefence: string;
    sdpServiceId: string;
    categoryName: string;
    refundDate: string;
    refundStatus: string;
}

const RefundReportExcelSchema: Schema = new Schema({
    serialNo: { type: String},
    customerMobileNumber: { type: String},
    description: { type: String},
    refundAmount: { type: String},
    refundRefence: { type: String},
    sdpServiceId: { type: String},
    categoryName: { type: String},
    refundDate: { type: String},
    refundStatus: { type: String},
});


export default mongoose.model<IRefundReportExcel>('RefundReportExcel', RefundReportExcelSchema);