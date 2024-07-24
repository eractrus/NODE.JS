const server = require('./src/config/server');

try {
    server.listen(3003, () => console.log('Servidor online'));
} catch (error) {
    console.log(error + 'Erro ao tentar iniciar o servidor')
}