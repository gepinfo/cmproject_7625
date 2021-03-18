import { Request, Response, NextFunction } from "express";
import { clientController } from '../controller/clientController';


export class Routes {
    private client: clientController = new clientController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/client/:id').delete(this.client.GpDelete);
app.route('/client/get/search').get(this.client.GpSearch);
app.route('/client/get/update').put(this.client.GpSearchForUpdate);
app.route('/client').put(this.client.GpUpdate);
app.route('/client').get(this.client.GpGetAllValues);
app.route('/client').post(this.client.GpCreate);
     }

}