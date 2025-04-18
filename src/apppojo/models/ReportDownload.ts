import mongoose, { Schema, Document } from 'mongoose';

export interface IReportDownload extends Document {
    id: string;
    title: string;
    link: string;
    createdDate: Date;
}

const ReportDownloadSchema: Schema = new Schema({
    id: { type: String},
    title: { type: String},
    link: { type: String},
    createdDate: { type: Date},
});


export default mongoose.model<IReportDownload>('ReportDownload', ReportDownloadSchema);