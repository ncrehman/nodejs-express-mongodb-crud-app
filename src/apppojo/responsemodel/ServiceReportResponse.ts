import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceReportResponse extends Document {
    languageName: string;
    serviceName: string;
    customerName: string;
    emailId: string;
    customerMobileNumber: string;
    subscriptionPack: string;
    servicePrice: number;
    autoRenewable: boolean;
    subscriptionDate: string;
    expiryDate: string;
}

const ServiceReportResponseSchema: Schema = new Schema({
    languageName: { type: String},
    serviceName: { type: String},
    customerName: { type: String},
    emailId: { type: String},
    customerMobileNumber: { type: String},
    subscriptionPack: { type: String},
    servicePrice: { type: Number},
    autoRenewable: { type: Boolean,  default: false},
    subscriptionDate: { type: String},
    expiryDate: { type: String},
});


export default mongoose.model<IServiceReportResponse>('ServiceReportResponse', ServiceReportResponseSchema);