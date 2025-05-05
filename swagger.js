const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Pokémon',
    version: '1.0.0',
    description: 'Una API simple para listar Pokémon',
  },
  servers: [
    {
      url: 'http://localhost:8081',
      description: 'Servidor de desarrollo',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;