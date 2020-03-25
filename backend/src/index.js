const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();


/* 
    BANCO DE DADOS SQL:
        -Tipos de relacionamentos:
            -Drivevr: SELECT * FROM users
            -Query Builder: table('users).select(*).where()
*/

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen( 3333 );

