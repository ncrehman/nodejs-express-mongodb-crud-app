import mongoose, { Schema, Document } from 'mongoose';
import Services, { IServices } from '../models/Services';

export interface IFeedContentRequest extends Document {
    englishtitles: string;
    arabicsTitles: string;
    englishshortDescription: string;
    arabicsShortDescription: string;
    arabiccontent0: string;
    arabiccontent1: string;
    arabiccontent2: string;
    englishcontent0: string;
    englishcontent1: string;
    englishcontent2: string;
    imageUrl: string;
    servicesObj: IServices;
}

const FeedContentRequestSchema: Schema = new Schema({
    englishtitles: { type: String},
    arabicsTitles: { type: String},
    englishshortDescription: { type: String},
    arabicsShortDescription: { type: String},
    arabiccontent0: { type: String},
    arabiccontent1: { type: String},
    arabiccontent2: { type: String},
    englishcontent0: { type: String},
    englishcontent1: { type: String},
    englishcontent2: { type: String},
    imageUrl: { type: String},
    servicesObj: { type: mongoose.Schema.Types.ObjectId, ref: Services},
});


export default mongoose.model<IFeedContentRequest>('FeedContentRequest', FeedContentRequestSchema);