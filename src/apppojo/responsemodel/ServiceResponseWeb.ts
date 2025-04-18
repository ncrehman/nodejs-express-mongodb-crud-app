import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceResponseWeb extends Document {
    _id: string;
    languagename: string;
    categorynaame: string;
    serviceid: string;
    servicename: string;
    url: string;
    publishtype: string;
    feedsize: number;
    feedlimit: number;
    serviceiconurl: string;
    submittedcount: number;
    publishedcount: number;
    archivedcount: number;
    outdatedcount: number;
}

const ServiceResponseWebSchema: Schema = new Schema({
    _id: { type: String},
    languagename: { type: String},
    categorynaame: { type: String},
    serviceid: { type: String},
    servicename: { type: String},
    url: { type: String},
    publishtype: { type: String},
    feedsize: { type: Number },
    feedlimit: { type: Number },
    serviceiconurl: { type: String},
    submittedcount: { type: Number},
    publishedcount: { type: Number},
    archivedcount: { type: Number},
    outdatedcount: { type: Number},
});


export default mongoose.model<IServiceResponseWeb>('ServiceResponseWeb', ServiceResponseWebSchema);