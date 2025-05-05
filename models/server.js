const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc'); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/pokemons', require('../routes/pokemons'));
        this.app.use('/api/pokemons/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor escuchando en puerto ${this.port}`);
        })
    }
}

module.exports = Server;