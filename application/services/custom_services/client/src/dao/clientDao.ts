import * as mongoose from 'mongoose';
import clientModel from '../models/client';
import { CustomLogger } from '../config/Logger'


export class clientDao {
    private client = clientModel;
    constructor() { }
public GpDelete(clientId, callback){
new CustomLogger().showLogger('info', 'Enter into clientDao.ts: GpDelete')

this.client.findByIdAndRemove(clientId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from clientDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(clientData, callback){
new CustomLogger().showLogger('info', 'Enter into clientDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(clientData).forEach(
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
this.client.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from clientDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(clientData, callback){
new CustomLogger().showLogger('info', 'Enter into clientDao.ts: GpSearchForUpdate')

this.client.findOneAndUpdate({ _id: clientData._id }, clientData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from clientDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(clientData, callback){
new CustomLogger().showLogger('info', 'Enter into clientDao.ts: GpUpdate')

this.client.findOneAndUpdate({ _id: clientData._id }, clientData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from clientDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into clientDao.ts: GpGetAllValues')

this.client.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from clientDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(clientData, callback){
new CustomLogger().showLogger('info', 'Enter into clientDao.ts: GpCreate')
let temp = new clientModel(clientData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from clientDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}