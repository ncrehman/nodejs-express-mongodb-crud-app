import mongoose, { Schema, Document } from 'mongoose';
import Services, { IServices } from './Services';
import Status, { IStatus } from './Status';

export interface IFeedContent_old extends Document {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    alternateTitle: string;
    alternateShortDescription: string;
    alternateDescription: string;
    contentList: Array<string>;
    imageUrl: string;
    serviceObj: IServices;
    createdById: string;
    likeCounts: number;
    createdDate: Date;
    publishDate: Date;
    statusObj: IStatus;
    modifiedDate: Date;
    updatedDate: Date;
}

const FeedContent_oldSchema: Schema = new Schema({
    id: { type: String},
    title: { type: String},
    shortDescription: { type: String},
    description: { type: String},
    alternateTitle: { type: String},
    alternateShortDescription: { type: String},
    alternateDescription: { type: String},
    contentList: { type: Array<String>, ref: String, required: true },
    imageUrl: { type: String},
    serviceObj: { type: mongoose.Schema.Types.ObjectId, ref: Services},
    createdById: { type: String},
    likeCounts: { type: Number },
    createdDate: { type: Date},
    publishDate: { type: Date},
    statusObj: { type: mongoose.Schema.Types.ObjectId, ref: Status},
    modifiedDate: { type: Date},
    updatedDate: { type: Date},
});


export default mongoose.model<IFeedContent_old>('FeedContent_old', FeedContent_oldSchema);