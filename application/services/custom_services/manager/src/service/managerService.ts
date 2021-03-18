import { Request, Response } from 'express';
import {managerDao} from '../dao/managerDao';
import { CustomLogger } from '../config/Logger'
let manager = new managerDao();

export class managerService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerService.ts: GpDelete')
     const  managerId = req.params.id;
     manager.GpDelete(managerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerService.ts: GpSearch')
     const  managerData = req.query;
     manager.GpSearch(managerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerService.ts: GpSearchForUpdate')
     const  managerData = req.body;
     manager.GpSearchForUpdate(managerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerService.ts: GpUpdate')
     const  managerData = req.body;
     manager.GpUpdate(managerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerService.ts: GpGetAllValues')
     
     manager.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerService.ts: GpCreate')
     const  managerData = req.body;
     manager.GpCreate(managerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerService.ts: GpCreate')
         callback(response);
         });
    }


}