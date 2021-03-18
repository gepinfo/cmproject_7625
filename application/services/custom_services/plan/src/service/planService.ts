import { Request, Response } from 'express';
import {planDao} from '../dao/planDao';
import { CustomLogger } from '../config/Logger'
let plan = new planDao();

export class planService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into planService.ts: GpDelete')
     const  planId = req.params.id;
     plan.GpDelete(planId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from planService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into planService.ts: GpSearch')
     const  planData = req.query;
     plan.GpSearch(planData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from planService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into planService.ts: GpSearchForUpdate')
     const  planData = req.body;
     plan.GpSearchForUpdate(planData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from planService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into planService.ts: GpUpdate')
     const  planData = req.body;
     plan.GpUpdate(planData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from planService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into planService.ts: GpGetAllValues')
     
     plan.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from planService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into planService.ts: GpCreate')
     const  planData = req.body;
     plan.GpCreate(planData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from planService.ts: GpCreate')
         callback(response);
         });
    }


}