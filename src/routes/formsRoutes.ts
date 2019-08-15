import { Router } from 'express';

import  formsController from '../controllers/formsController';

class FormsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void{


        this.router.post('/', formsController.create);
        /* obtener todos los id de una tabla this.router.get('/', gamesController.list); */
        /* obtener solo un id de la tabla this.router.get('/:id', gamesController.getOne);*/
        /* borrar un formulario this.router.delete('/:id', gamesController.delete); */
       /*  actualizar formulario this.router.put('/:id', gamesController.update); */
    }

}

 const formsRoutes = new FormsRoutes();
 export default formsRoutes.router;