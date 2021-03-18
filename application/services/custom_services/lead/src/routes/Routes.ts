import { Request, Response, NextFunction } from "express";
import { leadController } from '../controller/leadController';


export class Routes {
    private lead: leadController = new leadController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/lead/:id').delete(this.lead.GpDelete);
app.route('/lead/get/search').get(this.lead.GpSearch);
app.route('/lead/get/update').put(this.lead.GpSearchForUpdate);
app.route('/lead').put(this.lead.GpUpdate);
app.route('/lead').get(this.lead.GpGetAllValues);
app.route('/lead').post(this.lead.GpCreate);
     }

}