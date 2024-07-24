module.exports = function routeAdmin(server) {

    server.get('/admin', (req, res) => {
        res.render("admin/index", { Mensagem: result });
    });

    server.post('/noticias/salvar', (req, res) => {

        const dataForm = req.body;

        const connection = server.config.db();//conexão com banco de dados
        const postNoticia = server.src.model.noticiasModel;//conexão com model

        postNoticia.postNoticia(dataForm, connection, (error, result) => {
            res.render('/', { noticias: result })
        });


        res.json({
            Menssage: dataForm
        });
    });
};
