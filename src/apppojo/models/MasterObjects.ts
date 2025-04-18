import mongoose, { Schema, Document } from 'mongoose';
import Services, { IServices } from './Services';
import Category, { ICategory } from './Category';
import Languages, { ILanguages } from './Languages';
import FeedContent, { IFeedContent } from './FeedContent';
import Roles, { IRoles } from './Roles';
import Status, { IStatus } from './Status';

export interface IMasterObjects extends Document {
    servicess: IServices;
    categorys: ICategory;
    languagess: ILanguages;
    feedContents: IFeedContent;
    servicesLists: Array<IServices>;
    categoryList: Array<ICategory>;
    roless: IRoles;
    statuss: IStatus;
    statusName: string;
    clientName: string;
}

const MasterObjectsSchema: Schema = new Schema({
    servicess: { type: mongoose.Schema.Types.ObjectId, ref: Services},
    categorys: { type: mongoose.Schema.Types.ObjectId, ref: Category},
    languagess: { type: mongoose.Schema.Types.ObjectId, ref: Languages},
    feedContents: { type: mongoose.Schema.Types.ObjectId, ref: FeedContent},
    servicesLists: { type: Array<mongoose.Schema.Types.ObjectId>, ref: Services, required: true },
    categoryList: { type: Array<mongoose.Schema.Types.ObjectId>, ref: Category, required: true },
    roless: { type: mongoose.Schema.Types.ObjectId, ref: Roles},
    statuss: { type: mongoose.Schema.Types.ObjectId, ref: Status},
    statusName: { type: String},
    clientName: { type: String},
});


export default mongoose.model<IMasterObjects>('MasterObjects', MasterObjectsSchema);