import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceWiseContentCountsResponse extends Document {
    serviceName: string;
    serviceId: string;
    submittedcount: number;
    pendingcount: number;
    rejectedcount: number;
    publishedCount: number;
    archivedCount: number;
    outdatedCount: number;
    totalcount: number;
}

const ServiceWiseContentCountsResponseSchema: Schema = new Schema({
    serviceName: { type: String},
    serviceId: { type: String},
    submittedcount: { type: Number},
    pendingcount: { type: Number},
    rejectedcount: { type: Number},
    publishedCount: { type: Number},
    archivedCount: { type: Number},
    outdatedCount: { type: Number},
    totalcount: { type: Number},
});


export default mongoose.model<IServiceWiseContentCountsResponse>('ServiceWiseContentCountsResponse', ServiceWiseContentCountsResponseSchema);