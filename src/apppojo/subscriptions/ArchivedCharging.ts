import mongoose, { Schema, Document } from 'mongoose';
import CustomerCharging, { ICustomerCharging } from './CustomerCharging';

export interface IArchivedCharging extends Document {
    id: string;
    customerCharging: ICustomerCharging;
    createdDate: Date;
}

const ArchivedChargingSchema: Schema = new Schema({
    id: { type: String},
    customerCharging: { type: mongoose.Schema.Types.ObjectId, ref: CustomerCharging},
    createdDate: { type: Date},
});


export default mongoose.model<IArchivedCharging>('ArchivedCharging', ArchivedChargingSchema);