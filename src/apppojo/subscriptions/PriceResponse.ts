import mongoose, { Schema, Document } from 'mongoose';
import CategoryPrices, { ICategoryPrices } from './CategoryPrices';
import PortalPrices, { IPortalPrices } from './PortalPrices';
import ServicePrices, { IServicePrices } from './ServicePrices';

export interface IPriceResponse extends Document {
    categoryPricesObj: ICategoryPrices;
    portalPricesObj: IPortalPrices;
    servicePricesObj: IServicePrices;
    isServicePrice: boolean;
    isCategoryPrice: boolean;
    isPortalPrice: boolean;
}

const PriceResponseSchema: Schema = new Schema({
    categoryPricesObj: { type: mongoose.Schema.Types.ObjectId, ref: CategoryPrices},
    portalPricesObj: { type: mongoose.Schema.Types.ObjectId, ref: PortalPrices},
    servicePricesObj: { type: mongoose.Schema.Types.ObjectId, ref: ServicePrices},
    isServicePrice: { type: Boolean,  default: false},
    isCategoryPrice: { type: Boolean,  default: false},
    isPortalPrice: { type: Boolean,  default: false},
});


export default mongoose.model<IPriceResponse>('PriceResponse', PriceResponseSchema);