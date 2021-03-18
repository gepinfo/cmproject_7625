import { Request, Response } from 'express';
import { leadService } from '../service/leadService';
import { CustomLogger } from '../config/Logger'
let lead = new leadService();

export class leadController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
lead.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
lead.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
lead.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
lead.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
lead.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
lead.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadController.ts: GpCreate');
    })}


}