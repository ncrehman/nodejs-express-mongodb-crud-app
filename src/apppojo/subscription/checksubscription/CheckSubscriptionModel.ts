import mongoose, { Schema, Document } from 'mongoose';
import ProductDescs, { IProductDescs } from '../checksubscription/ProductDescs';
import SpNames, { ISpNames } from '../checksubscription/SpNames';
import ParentNames, { IParentNames } from '../checksubscription/ParentNames';
import AmountInfos, { IAmountInfos } from '../checksubscription/AmountInfos';
import ProductNames, { IProductNames } from '../checksubscription/ProductNames';

export interface ICheckSubscriptionModel extends Document {
    customerName: string;
    orderKey: number;
    isAutoExtend: number;
    productID: number;
    subExpireTime: number;
    productDescs: IProductDescs;
    nextChargeTime: number;
    srcProductID: number;
    userID: number;
    spID: string;
    subTime: number;
    parentID: string;
    parentType: number;
    spNames: ISpNames;
    subScriptionState: number;
    subApplyTime: number;
    payType: number;
    parentNames: IParentNames;
    amountInfos: IAmountInfos;
    productNames: IProductNames;
    channelID: number;
}

const CheckSubscriptionModelSchema: Schema = new Schema({
    customerName: { type: String},
    orderKey: { type: Number},
    isAutoExtend: { type: Number},
    productID: { type: Number},
    subExpireTime: { type: Number},
    productDescs: { type: mongoose.Schema.Types.ObjectId, ref: ProductDescs},
    nextChargeTime: { type: Number},
    srcProductID: { type: Number},
    userID: { type: Number},
    spID: { type: String},
    subTime: { type: Number},
    parentID: { type: String},
    parentType: { type: Number},
    spNames: { type: mongoose.Schema.Types.ObjectId, ref: SpNames},
    subScriptionState: { type: Number},
    subApplyTime: { type: Number},
    payType: { type: Number},
    parentNames: { type: mongoose.Schema.Types.ObjectId, ref: ParentNames},
    amountInfos: { type: mongoose.Schema.Types.ObjectId, ref: AmountInfos},
    productNames: { type: mongoose.Schema.Types.ObjectId, ref: ProductNames},
    channelID: { type: Number},
});


export default mongoose.model<ICheckSubscriptionModel>('CheckSubscriptionModel', CheckSubscriptionModelSchema);