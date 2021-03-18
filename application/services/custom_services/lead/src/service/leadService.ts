import { Request, Response } from 'express';
import {leadDao} from '../dao/leadDao';
import { CustomLogger } from '../config/Logger'
let lead = new leadDao();

export class leadService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadService.ts: GpDelete')
     const  leadId = req.params.id;
     lead.GpDelete(leadId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadService.ts: GpSearch')
     const  leadData = req.query;
     lead.GpSearch(leadData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadService.ts: GpSearchForUpdate')
     const  leadData = req.body;
     lead.GpSearchForUpdate(leadData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadService.ts: GpUpdate')
     const  leadData = req.body;
     lead.GpUpdate(leadData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadService.ts: GpGetAllValues')
     
     lead.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadService.ts: GpCreate')
     const  leadData = req.body;
     lead.GpCreate(leadData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadService.ts: GpCreate')
         callback(response);
         });
    }


}