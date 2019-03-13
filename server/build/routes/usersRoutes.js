"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (request, response) => {
            response.send('response sended..');
        });
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
