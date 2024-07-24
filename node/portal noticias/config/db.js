const { Pool } = require('pg');

//Tecnica de WRAPP
var comPgSQL = function () {

    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'noticias',
        password: 'Desenvolvedor22',
        port: '5432'
    });

    return pool
}


module.exports = function(){
    return comPgSQL
}