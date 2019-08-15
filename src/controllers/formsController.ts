import { Request, Response } from 'express';

import pool from '../database';

class FormController {


  public async  create(req: Request, res: Response): Promise<void> {

    await  pool.query('INSERT INTO theroofe_seminario_UFC set ?', [req.body]);
      res.json({message: 'Formulario enviado'});

}



   /*  obtener todos los id  que estan en la base de datos public async list (req: Request, res: Response){
      const tjuegos = await pool.query('SELECT * FROM escribenos');
      res.json(tjuegos);

    }
        */


   /*  obtener solo un id de la tabla public async getOne(req: Request, res: Response): Promise<any>{

        const { id } = req.params;

       const tjuegos = await  pool.query('SELECT * FROM escribenos WHERE id = ?', [id]);
            if(tjuegos.length > 0 ) {

                return res.json(tjuegos[0]);

            }


            res.status(404).json({text: 'juego no encontrado '});


    }

*/



    /* borrar formulario public  async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM escribenos WHERE id = ? ', [id]);
        res.json({message: 'el juego fue borrado'});
    } */



   /*  actualizar formulario   public  async update(req: Request, res: Response): Promise<void> {
       const { id } = req.params;
       await  pool.query('UPDATE  escribenos  set ? WHERE id = ?', [req.body, id] );
       res.json({message: 'juego actualizado compa'});
    }  */

}

  const  formController = new FormController();
  export default formController;
