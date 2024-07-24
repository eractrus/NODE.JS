module.exports = function routeTech(server) {

    server.get('/tech', (req, res) => {

        const connection = server.config.db();

        const noticaModel = new server.src.model.noticiaModel;

        noticaModel.getNoticia(connection, function (error, result) {
            res.render("section/tech", { noticias: result.rows});
        });

    });
};