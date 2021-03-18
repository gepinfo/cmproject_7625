import { Request, Response } from 'express';
import { clientService } from '../service/clientService';
import { CustomLogger } from '../config/Logger'
let client = new clientService();

export class clientController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
client.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into clientController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from clientController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
client.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into clientController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from clientController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
client.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into clientController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from clientController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
client.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into clientController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from clientController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
client.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into clientController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from clientController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
client.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into clientController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from clientController.ts: GpCreate');
    })}


}