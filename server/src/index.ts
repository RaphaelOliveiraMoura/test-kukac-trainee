import express, { Application } from 'express';

// debug server - see all request in console
import morgan from 'morgan';

import cors from 'cors';

import indexRoutes from './routes/indexRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    start(): void {
        this.app.listen( this.app.get('port'), () => {
            console.log("server listening on port " + this.app.get('port'));
        });
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use( morgan('dev') );
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded( {extended: false} ) );
    }

    routes(): void {
        this.app.use( '/', indexRoutes );
    }

}

const server = new Server();
server.start();
