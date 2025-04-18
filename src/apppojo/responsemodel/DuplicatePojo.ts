import mongoose, { Schema, Document } from 'mongoose';
import Services, { IServices } from '../models/Services';
import FeedContent, { IFeedContent } from '../models/FeedContent';

export interface IDuplicatePojo extends Document {
    serviceObj: IServices;
    duplicatefeeds: IFeedContent;
    uploadingcontent: IFeedContent;
}

const DuplicatePojoSchema: Schema = new Schema({
    serviceObj: { type: mongoose.Schema.Types.ObjectId, ref: Services},
    duplicatefeeds: { type: mongoose.Schema.Types.ObjectId, ref: FeedContent},
    uploadingcontent: { type: mongoose.Schema.Types.ObjectId, ref: FeedContent},
});


export default mongoose.model<IDuplicatePojo>('DuplicatePojo', DuplicatePojoSchema);