module.exports = function routeHome(server) {

    server.get('/', (req, res) => {

        const connection = server.config.db();//conexão com banco de dados
        const getAllNoticias = server.src.model.noticiasModel;//conexão com model

        getAllNoticias.getAllNoticias(connection, function (error, result) {
            res.render("section/home", { noticias: result.rows });
        });
    });
};