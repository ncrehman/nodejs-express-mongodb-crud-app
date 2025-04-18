import mongoose, { Schema, Document } from 'mongoose';
import SendUpdateMail, { ISendUpdateMail } from './SendUpdateMail';

export interface IEmailConfiguration extends Document {
    id: string;
    toMailIds: Array<ISendUpdateMail>;
    ccEmailIds: Array<ISendUpdateMail>;
    bccEmailIds: Array<ISendUpdateMail>;
    sendFeedUpdate: boolean;
    sendSubscriptionReport: boolean;
}

const EmailConfigurationSchema: Schema = new Schema({
    id: { type: String},
    toMailIds: { type: Array<mongoose.Schema.Types.ObjectId>, ref: SendUpdateMail, required: true },
    ccEmailIds: { type: Array<mongoose.Schema.Types.ObjectId>, ref: SendUpdateMail, required: true },
    bccEmailIds: { type: Array<mongoose.Schema.Types.ObjectId>, ref: SendUpdateMail, required: true },
    sendFeedUpdate: { type: Boolean,  default: false},
    sendSubscriptionReport: { type: Boolean,  default: false},
});


export default mongoose.model<IEmailConfiguration>('EmailConfiguration', EmailConfigurationSchema);