import * as mongoose from 'mongoose';
import leadModel from '../models/lead';
import { CustomLogger } from '../config/Logger'


export class leadDao {
    private lead = leadModel;
    constructor() { }
public GpDelete(leadId, callback){
new CustomLogger().showLogger('info', 'Enter into leadDao.ts: GpDelete')

this.lead.findByIdAndRemove(leadId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(leadData, callback){
new CustomLogger().showLogger('info', 'Enter into leadDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(leadData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.lead.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(leadData, callback){
new CustomLogger().showLogger('info', 'Enter into leadDao.ts: GpSearchForUpdate')

this.lead.findOneAndUpdate({ _id: leadData._id }, leadData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(leadData, callback){
new CustomLogger().showLogger('info', 'Enter into leadDao.ts: GpUpdate')

this.lead.findOneAndUpdate({ _id: leadData._id }, leadData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into leadDao.ts: GpGetAllValues')

this.lead.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(leadData, callback){
new CustomLogger().showLogger('info', 'Enter into leadDao.ts: GpCreate')
let temp = new leadModel(leadData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}