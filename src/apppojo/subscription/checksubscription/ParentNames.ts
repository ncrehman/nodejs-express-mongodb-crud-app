import mongoose, { Schema, Document } from 'mongoose';
import ParentName, { IParentName } from '../checksubscription/ParentName';

export interface IParentNames extends Document {
    parentName: IParentName;
}

const ParentNamesSchema: Schema = new Schema({
    parentName: { type: mongoose.Schema.Types.ObjectId, ref: ParentName},
});


export default mongoose.model<IParentNames>('ParentNames', ParentNamesSchema);