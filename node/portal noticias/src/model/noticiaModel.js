
class Noticias {
    getNoticia = (connection, callback) => {
        connection.query('select * from noticia where id = 3  ', callback);
    }
    
    postNoticia = (data, connection, callback) => {
        connection.query('insert into noticia set ?', data, callback);
    }
    
}

module.exports = function () {

    return Noticias;
}