import { Request, Response } from 'express';

class IndexController {

    index (req: Request, res: Response){

        res.send('sos la ostia xd')


    }  

}


 export const  indexController = new IndexController();