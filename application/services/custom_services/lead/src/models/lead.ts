
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const leadSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   leadname: String
})

const leadModel = mongoose.model('lead', leadSchema, 'lead');
export default leadModel;
