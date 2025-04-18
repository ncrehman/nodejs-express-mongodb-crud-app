import mongoose, { Schema, Document } from 'mongoose';

export interface IChargingReportExcel extends Document {
    sdpServiceId: string;
    customerMobileNumber: string;
    description: string;
    chargingAmount: string;
    extraCharges: string;
    chargingRefence: string;
    categoryName: string;
    chargingDate: string;
    chargingStatus: string;
}

const ChargingReportExcelSchema: Schema = new Schema({
    sdpServiceId: { type: String},
    customerMobileNumber: { type: String},
    description: { type: String},
    chargingAmount: { type: String},
    extraCharges: { type: String},
    chargingRefence: { type: String},
    categoryName: { type: String},
    chargingDate: { type: String},
    chargingStatus: { type: String},
});


export default mongoose.model<IChargingReportExcel>('ChargingReportExcel', ChargingReportExcelSchema);