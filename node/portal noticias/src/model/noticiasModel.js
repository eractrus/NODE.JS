module.exports = function () {

    this.getAllNoticias = (connection, callback) => {
        connection.query('select * from noticia', callback);
    }
    
    return this
}