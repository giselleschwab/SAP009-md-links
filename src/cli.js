import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from "chalk";
import listaValidada from "./http-validacao.js";
//aqui vamos criar o código que fará a manipulação
//das informações que passaremos pela linha de comando e as levará para o restante da aplicação

//objeto process - objeto próprio do node.js
//process.argv - captura as informações vinda da linha de comando
const caminho = process.argv;

//receber o nome de arquivo que ele está sendo lido
async function imprimeLista (valida, resultado, identificador = '') {
    
    if (valida) {
    console.log(
        chalk.yellow('lista validada'),
        chalk.black.bgGreen(identificador),
        await listaValidada(resultado));
    } else {
    console.log(
        chalk.yellow('lista de links'),
        chalk.black.bgGreen(identificador),
        resultado);
    }
}
//função responsável por mandar nossa lista de links para a tela do terminal
//isFile() vai retornar true apenas quando o caminho for de um arquivo
function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';
    
    try {
       fs.lstatSync(caminho);
    } catch(erro) {
        if(erro.code === 'ENOENT') {
            console.log('arquivo ou diretório não existe')
            return;
        }
    }
    if(fs.lstatSync(caminho).isFile()){
        pegaArquivo(argumentos[2])
        .then((resultado) => {
        imprimeLista(valida, resultado)
      })
      //resultado chamará pegaArquivo, passando caminho, na posição 2 do array
      .catch((erro) => {
        console.error('Erro ao processar o arquivo', erro);
      });
    } else if (fs.lstatSync(caminho).isDirectory()){
        fs.promises.readdir(caminho)
        .then((arquivos) => {
            arquivos.forEach((nomeDeArquivo) => {
                pegaArquivo(`${caminho}/${nomeDeArquivo}`)
                .then((lista) => {
                 imprimeLista(valida, lista, nomeDeArquivo)
                })
            })
        })
        .catch((err)=> {
            console.error(err);
        })
    }
}
  
processaTexto(caminho)
