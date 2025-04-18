import mongoose, { Schema, Document } from 'mongoose';

export interface IDbApiLogs extends Document {
    level: string;
    trackingId: string;
    apiName: string;
    uri: string;
    apiInput: string;
    headers: string;
    apiStatus: string;
    apiResponse: string;
    apiError: string;
    billingPeriod: string;
    date: string;
    localDate: string;
    createdDate: Date;
}

const DbApiLogsSchema: Schema = new Schema({
    level: { type: String},
    trackingId: { type: String},
    apiName: { type: String},
    uri: { type: String},
    apiInput: { type: String},
    headers: { type: String},
    apiStatus: { type: String},
    apiResponse: { type: String},
    apiError: { type: String},
    billingPeriod: { type: String},
    date: { type: String},
    localDate: { type: String},
    createdDate: { type: Date},
},{collection: 'dbApiLogs'});


export default mongoose.model<IDbApiLogs>('DbApiLogs', DbApiLogsSchema);