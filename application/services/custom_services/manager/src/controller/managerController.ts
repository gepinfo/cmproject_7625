import { Request, Response } from 'express';
import { managerService } from '../service/managerService';
import { CustomLogger } from '../config/Logger'
let manager = new managerService();

export class managerController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
manager.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
manager.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
manager.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
manager.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
manager.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
manager.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerController.ts: GpCreate');
    })}


}