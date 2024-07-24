//imports module
const server = require('./config/server');

//config port
try {
    server.listen(3003, () => {
        console.log('Servidor rodando...');
    });
} catch (error) {
    console.error(`ERROR| Erro ao tentar iniciar o servidor ${error}`);
};