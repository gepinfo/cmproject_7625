import { Request, Response } from 'express';
import { planService } from '../service/planService';
import { CustomLogger } from '../config/Logger'
let plan = new planService();

export class planController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
plan.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into planController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from planController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
plan.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into planController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from planController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
plan.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into planController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from planController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
plan.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into planController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from planController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
plan.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into planController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from planController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
plan.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into planController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from planController.ts: GpCreate');
    })}


}