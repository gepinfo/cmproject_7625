import { Request, Response, NextFunction } from "express";
import { planController } from '../controller/planController';


export class Routes {
    private plan: planController = new planController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/plan/:id').delete(this.plan.GpDelete);
app.route('/plan/get/search').get(this.plan.GpSearch);
app.route('/plan/get/update').put(this.plan.GpSearchForUpdate);
app.route('/plan').put(this.plan.GpUpdate);
app.route('/plan').get(this.plan.GpGetAllValues);
app.route('/plan').post(this.plan.GpCreate);
     }

}