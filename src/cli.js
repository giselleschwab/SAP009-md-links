import fs from 'fs';
import chalk from 'chalk';
import { extraiLinks } from './links.js';
import { listaValidada, calculaStats } from './validate-stats.js';

function imprimeLista(argumentos, resultado) {
  if (argumentos.stats && argumentos.validate) {
    listaValidada(resultado).then((links) => {
      const stats = calculaStats(links);
      // eslint-disable-next-line prefer-template
      console.log(chalk.ansi256(21).bold(`Total: ${stats.total}`) + '\n' + chalk.ansi256(93).bold(`Unique: ${stats.unique}`) + '\n' + chalk.redBright.bold(`Broken: ${stats.broken}`));
    });
  } else if (argumentos.stats) {
    listaValidada(resultado).then((link) => {
      const stats = calculaStats(link);
      // eslint-disable-next-line prefer-template
      console.log(chalk.ansi256(21).bold(`Total: ${stats.total}`) + '\n' + chalk.ansi256(93).bold(`Unique: ${stats.unique}`));
    });
  } else if (argumentos.validate) {
    listaValidada(resultado).then((linha) => {
      linha.forEach((link) => {
        console.log(
          `${chalk.ansi256(218).bold(link.file)} | ${chalk.ansi256(56).bold(link.href)} | ${chalk.ansi256(255).bold(link.text)} | ${link.status}`,
        );
      });
    });
  } else {
    resultado.forEach((link) => {
      console.log(
        `${link.file} | ${link.href} | ${link.text}`,
      );
    });
  }
}

function processaTexto(argumentos) {
  const { caminho } = argumentos;
  try {
    fs.lstatSync(caminho);
  } catch (erro) {
    if (erro.code === 'ENOENT') {
      console.log('arquivo ou diretório não existe');
      return;
    }
  }
  if (fs.lstatSync(caminho).isFile()) {
    extraiLinks(argumentos.caminho)
      .then((resultado) => {
        imprimeLista(argumentos, resultado);
      })
      .catch((erro) => {
        console.error('Erro ao processar o arquivo', erro);
      });
  } else if (fs.lstatSync(caminho).isDirectory()) {
    fs.promises.readdir(caminho)
      .then((arquivos) => {
        arquivos.forEach((nomeDeArquivo) => {
          extraiLinks(`${caminho}/${nomeDeArquivo}`)
            .then((lista) => {
              imprimeLista(argumentos, lista, nomeDeArquivo);
            });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export { imprimeLista, processaTexto };
