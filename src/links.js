import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

function extraiLinks(caminhoDoArquivo) {
  const encoding = 'utf-8';
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

  return fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => {
      const capturas = [...texto.matchAll(regex)];
      const resultados = capturas.map((captura) => ({
        href: captura[2],
        text: captura[1],
        file: caminhoDoArquivo,
      }));
      return resultados;
    })
    .catch((erro) => trataErro(erro));
}

export { extraiLinks, trataErro };
