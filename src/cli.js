#!/usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';
import { extraiLinks } from './index.js';
import { listaValidada, calculaStats } from './validate-stats.js';

const caminho = process.argv;

function imprimeLista(valida, resultado) {
  if (caminho.includes('--stats') && caminho.includes('--validate')) {
    listaValidada(resultado).then((links) => {
      const stats = calculaStats(links);
      // eslint-disable-next-line prefer-template
      console.log(chalk.ansi256(21).bold(`Total: ${stats.total}`) + '\n' + chalk.ansi256(93).bold(`Unique: ${stats.unique}`) + '\n' + chalk.redBright.bold(`Broken: ${stats.broken}`));
    });
  } else if (caminho.includes('--stats')) {
    listaValidada(resultado).then((link) => {
      const stats = calculaStats(link);
      // eslint-disable-next-line prefer-template
      console.log(chalk.ansi256(21).bold(`Total: ${stats.total}`) + '\n' + chalk.ansi256(93).bold(`Unique: ${stats.unique}`));
    });
  } else if (valida) {
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
  const caminhoArgumento = argumentos[2];
  const valida = argumentos[3] === '--validate';

  try {
    fs.lstatSync(caminhoArgumento);
  } catch (erro) {
    if (erro.code === 'ENOENT') {
      console.log('arquivo ou diretório não existe');
      return;
    }
  }
  if (fs.lstatSync(caminhoArgumento).isFile()) {
    extraiLinks(argumentos[2])
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
          extraiLinks(`${caminho}/${nomeDeArquivo}`)
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

export { imprimeLista, processaTexto };
