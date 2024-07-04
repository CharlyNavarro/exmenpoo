import express from 'express';
import {Server} from 'azle';

export default Server(()=>{
    const app = express();
    return app.listen();
})