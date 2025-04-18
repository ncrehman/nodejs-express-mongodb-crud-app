import mongoose, { Schema, Document } from 'mongoose';

export interface IPortalReportResponse extends Document {
    customerName: string;
    emailId: string;
    customerMobileNumber: string;
    subscriptionPack: string;
    portalPrice: number;
    autoRenewable: boolean;
    subscriptionDate: string;
    expiryDate: string;
}

const PortalReportResponseSchema: Schema = new Schema({
    customerName: { type: String},
    emailId: { type: String},
    customerMobileNumber: { type: String},
    subscriptionPack: { type: String},
    portalPrice: { type: Number},
    autoRenewable: { type: Boolean,  default: false},
    subscriptionDate: { type: String},
    expiryDate: { type: String},
});


export default mongoose.model<IPortalReportResponse>('PortalReportResponse', PortalReportResponseSchema);