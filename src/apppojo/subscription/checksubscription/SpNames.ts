import mongoose, { Schema, Document } from 'mongoose';
import SpName, { ISpName } from '../checksubscription/SpName';

export interface ISpNames extends Document {
    spName: ISpName;
}

const SpNamesSchema: Schema = new Schema({
    spName: { type: mongoose.Schema.Types.ObjectId, ref: SpName},
});


export default mongoose.model<ISpNames>('SpNames', SpNamesSchema);