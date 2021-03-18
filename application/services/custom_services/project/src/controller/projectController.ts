import { Request, Response } from 'express';
import { projectService } from '../service/projectService';
import { CustomLogger } from '../config/Logger'
let project = new projectService();

export class projectController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
project.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
project.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
project.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
project.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
project.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
project.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectController.ts: GpCreate');
    })}


}