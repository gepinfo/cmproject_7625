import { Request, Response, NextFunction } from "express";
import { projectController } from '../controller/projectController';


export class Routes {
    private project: projectController = new projectController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/project/:id').delete(this.project.GpDelete);
app.route('/project/get/search').get(this.project.GpSearch);
app.route('/project/get/update').put(this.project.GpSearchForUpdate);
app.route('/project').put(this.project.GpUpdate);
app.route('/project').get(this.project.GpGetAllValues);
app.route('/project').post(this.project.GpCreate);
     }

}