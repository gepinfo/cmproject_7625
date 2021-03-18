import * as mongoose from 'mongoose';
import managerModel from '../models/manager';
import { CustomLogger } from '../config/Logger'


export class managerDao {
    private manager = managerModel;
    constructor() { }
public GpDelete(managerId, callback){
new CustomLogger().showLogger('info', 'Enter into managerDao.ts: GpDelete')

this.manager.findByIdAndRemove(managerId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(managerData, callback){
new CustomLogger().showLogger('info', 'Enter into managerDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(managerData).forEach(
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
this.manager.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(managerData, callback){
new CustomLogger().showLogger('info', 'Enter into managerDao.ts: GpSearchForUpdate')

this.manager.findOneAndUpdate({ _id: managerData._id }, managerData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(managerData, callback){
new CustomLogger().showLogger('info', 'Enter into managerDao.ts: GpUpdate')

this.manager.findOneAndUpdate({ _id: managerData._id }, managerData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into managerDao.ts: GpGetAllValues')

this.manager.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(managerData, callback){
new CustomLogger().showLogger('info', 'Enter into managerDao.ts: GpCreate')
let temp = new managerModel(managerData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}