import * as mongoose from 'mongoose';
import planModel from '../models/plan';
import { CustomLogger } from '../config/Logger'


export class planDao {
    private plan = planModel;
    constructor() { }
public GpDelete(planId, callback){
new CustomLogger().showLogger('info', 'Enter into planDao.ts: GpDelete')

this.plan.findByIdAndRemove(planId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from planDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(planData, callback){
new CustomLogger().showLogger('info', 'Enter into planDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(planData).forEach(
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
this.plan.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from planDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(planData, callback){
new CustomLogger().showLogger('info', 'Enter into planDao.ts: GpSearchForUpdate')

this.plan.findOneAndUpdate({ _id: planData._id }, planData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from planDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(planData, callback){
new CustomLogger().showLogger('info', 'Enter into planDao.ts: GpUpdate')

this.plan.findOneAndUpdate({ _id: planData._id }, planData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from planDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into planDao.ts: GpGetAllValues')

this.plan.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from planDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(planData, callback){
new CustomLogger().showLogger('info', 'Enter into planDao.ts: GpCreate')
let temp = new planModel(planData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from planDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}