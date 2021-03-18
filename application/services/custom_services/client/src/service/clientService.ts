import { Request, Response } from 'express';
import {clientDao} from '../dao/clientDao';
import { CustomLogger } from '../config/Logger'
let client = new clientDao();

export class clientService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into clientService.ts: GpDelete')
     const  clientId = req.params.id;
     client.GpDelete(clientId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from clientService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into clientService.ts: GpSearch')
     const  clientData = req.query;
     client.GpSearch(clientData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from clientService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into clientService.ts: GpSearchForUpdate')
     const  clientData = req.body;
     client.GpSearchForUpdate(clientData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from clientService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into clientService.ts: GpUpdate')
     const  clientData = req.body;
     client.GpUpdate(clientData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from clientService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into clientService.ts: GpGetAllValues')
     
     client.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from clientService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into clientService.ts: GpCreate')
     const  clientData = req.body;
     client.GpCreate(clientData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from clientService.ts: GpCreate')
         callback(response);
         });
    }


}