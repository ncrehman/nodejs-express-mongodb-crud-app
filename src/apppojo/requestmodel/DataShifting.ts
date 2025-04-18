import mongoose, { Schema, Document } from 'mongoose';

export interface IDataShifting extends Document {
    from: string;
    to: string;
    tableName: string;
}

const DataShiftingSchema: Schema = new Schema({
    from: { type: String},
    to: { type: String},
    tableName: { type: String},
});


export default mongoose.model<IDataShifting>('DataShifting', DataShiftingSchema);