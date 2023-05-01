import fs from 'fs';
import chalk from 'chalk';
import pegaArquivo from './index.js';
import listaValidada from './http-validacao.js';

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {
  if (valida) {
    console.log(
      chalk.yellow('lista validada'),
      chalk.black.bgGreen(identificador),
      await listaValidada(resultado),
    );
  } else {
    console.log(
      chalk.yellow('lista de links'),
      chalk.black.bgGreen(identificador),
      resultado,
    );
  }
}

function processaTexto(argumentos) {
  const caminhoArgumento = argumentos[2];
  const valida = argumentos[3] === '--valida';

  try {
    fs.lstatSync(caminhoArgumento);
  } catch (erro) {
    if (erro.code === 'ENOENT') {
      console.log('arquivo ou diretório não existe');
      return;
    }
  }
  if (fs.lstatSync(caminhoArgumento).isFile()) {
    pegaArquivo(argumentos[2])
      .then((resultado) => {
        imprimeLista(valida, resultado);
      })

      .catch((erro) => {
        console.error('Erro ao processar o arquivo', erro);
      });
  } else if (fs.lstatSync(caminho).isDirectory()) {
    fs.promises.readdir(caminho)
      .then((arquivos) => {
        arquivos.forEach((nomeDeArquivo) => {
          pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            .then((lista) => {
              imprimeLista(valida, lista, nomeDeArquivo);
            });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

processaTexto(caminho);
