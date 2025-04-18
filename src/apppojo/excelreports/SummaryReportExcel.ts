import mongoose, { Schema, Document } from 'mongoose';

export interface ISummaryReportExcel extends Document {
    serialNo: string;
    categoryName: string;
    sdpServiceId: string;
    customerMobile: string;
    totalamount: string;
    transactionId: string;
    status: string;
    subscriptionDate: string;
}

const SummaryReportExcelSchema: Schema = new Schema({
    serialNo: { type: String},
    categoryName: { type: String},
    sdpServiceId: { type: String},
    customerMobile: { type: String},
    totalamount: { type: String},
    transactionId: { type: String},
    status: { type: String},
    subscriptionDate: { type: String},
});


export default mongoose.model<ISummaryReportExcel>('SummaryReportExcel', SummaryReportExcelSchema);