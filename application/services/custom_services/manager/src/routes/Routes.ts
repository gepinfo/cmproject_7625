import { Request, Response, NextFunction } from "express";
import { managerController } from '../controller/managerController';


export class Routes {
    private manager: managerController = new managerController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/manager/:id').delete(this.manager.GpDelete);
app.route('/manager/get/search').get(this.manager.GpSearch);
app.route('/manager/get/update').put(this.manager.GpSearchForUpdate);
app.route('/manager').put(this.manager.GpUpdate);
app.route('/manager').get(this.manager.GpGetAllValues);
app.route('/manager').post(this.manager.GpCreate);
     }

}