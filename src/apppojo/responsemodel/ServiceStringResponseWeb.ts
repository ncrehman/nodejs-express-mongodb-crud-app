import mongoose, { Schema, Document } from 'mongoose';

export interface IServiceStringResponseWeb extends Document {
    _id: string;
    serviceid: string;
    servicename: string;
    url: string;
    filename: string;
    publishtype: string;
    feedlimit: number;
    createdbyid: string;
    createdby: string;
    createddate: string;
    serviceiconurl: string;
    paid: boolean;
    showonmobile: boolean;
    gender: string;
    submittedcount: number;
    publishedcount: number;
    archivedcount: number;
    outdatedcount: number;
}

const ServiceStringResponseWebSchema: Schema = new Schema({
    _id: { type: String},
    serviceid: { type: String},
    servicename: { type: String},
    url: { type: String},
    filename: { type: String},
    publishtype: { type: String},
    feedlimit: { type: Number },
    createdbyid: { type: String},
    createdby: { type: String},
    createddate: { type: String},
    serviceiconurl: { type: String},
    paid: { type: Boolean,  default: false},
    showonmobile: { type: Boolean,  default: false},
    gender: { type: String},
    submittedcount: { type: Number},
    publishedcount: { type: Number},
    archivedcount: { type: Number},
    outdatedcount: { type: Number},
});


export default mongoose.model<IServiceStringResponseWeb>('ServiceStringResponseWeb', ServiceStringResponseWebSchema);