const fs = require('fs');
const path = require('path');

var root = './arquivos';

function getArquivos(c) {
    const result = fs.readdirSync(c, 'utf8');
    console.log(result);
}

function writeFS(c, text) {
    try {
        const result = fs.writeFileSync(c + '/arquivo01', text);
        console.log('Insert write');
    } catch (error) {
        console.error(`ERROR | error internal: ${error}`);
    }
};

function appendWrite(c, text) {

    fs.appendFile(`${c}/arquivo01`, text, (error) => {

        if (!error) {
            console.log('Append write success');
            return;
        };

        console.error(`ERROR | error internal: ${error}`);
    });

}

function rename(c, value) {

    fs.rename(c, value, (error) => {
        if (!error) {
            console.log('Rename success 1');
            return;
        };
        console.error(`ERROR | error internal: ${error}`);
    });
};


function deleteFS(c) {
    fs.unlink(c, (error) => {
        if (!error) {
            console.log('Delete success');
            return;
        };

        console.error('Erro: ' + error);
    });
};

//getArquivos(root);
//writeFS(root, 'Escrevendo em arquivos');
//appendWrite(root, ' Escrevendo em arquivos');
//rename(`${root}/arq001)`, `${root}/arq001.txt`);
deleteFS(root+'/arquivo04');