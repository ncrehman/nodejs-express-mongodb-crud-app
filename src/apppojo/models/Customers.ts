import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomers extends Document {
    id: string;
    fullName: string;
    mobileNumber: string;
    aliasNumber: string;
    password: string;
    customerUniqueId: string;
    uniqueToken: string;
    currentDate: string;
    remarks: string;
    isSubscribed: boolean;
    unsubscribedDate: Date;
    chargingDate: Date;
    lastRequest: Date;
    expiryDate: Date;
    packId: string;
    packName: string;
    coinEarned: number;
    createdDate: Date;
}

const CustomersSchema: Schema = new Schema({
    id: { type: String},
    fullName: { type: String},
    mobileNumber: { type: String},
    aliasNumber: { type: String},
    password: { type: String},
    customerUniqueId: { type: String},
    uniqueToken: { type: String},
    currentDate: { type: String},
    remarks: { type: String},
    isSubscribed: { type: Boolean,  default: false},
    unsubscribedDate: { type: Date},
    chargingDate: { type: Date},
    lastRequest: { type: Date},
    expiryDate: { type: Date},
    packId: { type: String},
    packName: { type: String},
    coinEarned: { type: Number },
    createdDate: { type: Date},
});


export default mongoose.model<ICustomers>('Customers', CustomersSchema);