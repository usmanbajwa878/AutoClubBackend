const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
  swaggerDefinition:{
    info:{
      title:'Auto Club',
      description:'Auto Club Api Information',
      contact:{
        name:'Usman Bajwa',

      },
      servers:['http://localhost:3000']
    }
  },
  apis:['index.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
