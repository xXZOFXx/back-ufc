"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formsController_1 = __importDefault(require("../controllers/formsController"));
class FormsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', formsController_1.default.create);
        /* obtener todos los id de una tabla this.router.get('/', gamesController.list); */
        /* obtener solo un id de la tabla this.router.get('/:id', gamesController.getOne);*/
        /* borrar un formulario this.router.delete('/:id', gamesController.delete); */
        /*  actualizar formulario this.router.put('/:id', gamesController.update); */
    }
}
const formsRoutes = new FormsRoutes();
exports.default = formsRoutes.router;
