import mongoose, { Schema, Document } from 'mongoose';
import ServiceReportResponse, { IServiceReportResponse } from './ServiceReportResponse';
import PortalReportResponse, { IPortalReportResponse } from './PortalReportResponse';

export interface ISubscribeResponce extends Document {
    serviceReportResponses: Array<IServiceReportResponse>;
    portalReportResponses: Array<IPortalReportResponse>;
}

const SubscribeResponceSchema: Schema = new Schema({
    serviceReportResponses: { type: Array<mongoose.Schema.Types.ObjectId>, ref: ServiceReportResponse, required: true },
    portalReportResponses: { type: Array<mongoose.Schema.Types.ObjectId>, ref: PortalReportResponse, required: true },
});


export default mongoose.model<ISubscribeResponce>('SubscribeResponce', SubscribeResponceSchema);