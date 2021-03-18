import { Request, Response } from 'express';
import {projectDao} from '../dao/projectDao';
import { CustomLogger } from '../config/Logger'
let project = new projectDao();

export class projectService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectService.ts: GpDelete')
     const  projectId = req.params.id;
     project.GpDelete(projectId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectService.ts: GpSearch')
     const  projectData = req.query;
     project.GpSearch(projectData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectService.ts: GpSearchForUpdate')
     const  projectData = req.body;
     project.GpSearchForUpdate(projectData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectService.ts: GpUpdate')
     const  projectData = req.body;
     project.GpUpdate(projectData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectService.ts: GpGetAllValues')
     
     project.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectService.ts: GpCreate')
     const  projectData = req.body;
     project.GpCreate(projectData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectService.ts: GpCreate')
         callback(response);
         });
    }


}