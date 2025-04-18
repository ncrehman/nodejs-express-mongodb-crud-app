import mongoose, { Schema, Document } from 'mongoose';

export interface IDbLogs extends Document {
    level: string;
    message: string;
    input: string;
    output: string;
    apiInput: string;
    apiOutput: string;
    error: string;
    billingPeriod: string;
    date: string;
    localDate: string;
    createdDate: Date;
}

const DbLogsSchema: Schema = new Schema({
    level: { type: String},
    message: { type: String},
    input: { type: String},
    output: { type: String},
    apiInput: { type: String},
    apiOutput: { type: String},
    error: { type: String},
    billingPeriod: { type: String},
    date: { type: String},
    localDate: { type: String},
    createdDate: { type: Date},
},{collection: 'dbLogs'});


export default mongoose.model<IDbLogs>('DbLogs', DbLogsSchema);