
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const projectSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   projectname: String,
   technology: String,
   manager: { type: Schema.Types.String, ref: 'manager' },
   client: { type: Schema.Types.String, ref: 'client' },
   lead: { type: Schema.Types.String, ref: 'lead' }
})

const projectModel = mongoose.model('project', projectSchema, 'project');
export default projectModel;
