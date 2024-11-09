const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc'); 
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = { 
    swaggerDefinition: { 
        openapi: '3.0.0', 
        info: { 
            title: 'API Pokemons', 
            version: '1.0.0', 
            description: 'Documentación de mi API de pokemones', }, 
            servers: [ 
                { url: 'http://localhost:8081', }, 
            ], 
        }, 
        apis: ['./routes/*.js'], 
    };

const swaggerDocs = swaggerJsdoc(swaggerOptions);

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
        this.app.use('/api/pokemons/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor escuchando en puerto ${this.port}`);
        })
    }
}

module.exports = Server;