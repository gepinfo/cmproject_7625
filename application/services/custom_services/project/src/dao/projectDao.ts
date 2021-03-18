import * as mongoose from 'mongoose';
import projectModel from '../models/project';
import { CustomLogger } from '../config/Logger'


export class projectDao {
    private project = projectModel;
    constructor() { }
public GpDelete(projectId, callback){
new CustomLogger().showLogger('info', 'Enter into projectDao.ts: GpDelete')

this.project.findByIdAndRemove(projectId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(projectData, callback){
new CustomLogger().showLogger('info', 'Enter into projectDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(projectData).forEach(
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
this.project.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(projectData, callback){
new CustomLogger().showLogger('info', 'Enter into projectDao.ts: GpSearchForUpdate')

this.project.findOneAndUpdate({ _id: projectData._id }, projectData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(projectData, callback){
new CustomLogger().showLogger('info', 'Enter into projectDao.ts: GpUpdate')

this.project.findOneAndUpdate({ _id: projectData._id }, projectData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into projectDao.ts: GpGetAllValues')

this.project.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(projectData, callback){
new CustomLogger().showLogger('info', 'Enter into projectDao.ts: GpCreate')
let temp = new projectModel(projectData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}