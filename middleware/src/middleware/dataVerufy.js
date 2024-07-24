module.exports = function (req, res, next) {
    try {
        const { name, email } = req.body;

        if (name === "" || email === "") {
            return res.status(400).json({ error: "Preencha todos os campos" });
        }

        next();
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}
