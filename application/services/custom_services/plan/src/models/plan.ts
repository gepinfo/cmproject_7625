
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const planSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   planname: String
})

const planModel = mongoose.model('plan', planSchema, 'plan');
export default planModel;
