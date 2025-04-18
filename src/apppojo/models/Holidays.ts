import mongoose, { Schema, Document } from 'mongoose';

export interface IHolidays extends Document {
    id: string;
    title: string;
    dateString: string;
    date: Date;
    createdDate: Date;
}

const HolidaysSchema: Schema = new Schema({
    id: { type: String},
    title: { type: String},
    dateString: { type: String},
    date: { type: Date},
    createdDate: { type: Date},
});


export default mongoose.model<IHolidays>('Holidays', HolidaysSchema);