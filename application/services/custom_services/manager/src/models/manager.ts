
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const managerSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   managername: String
})

const managerModel = mongoose.model('manager', managerSchema, 'manager');
export default managerModel;
