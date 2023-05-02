#!/usr/bin/env node
import fs from 'fs';
// import chalk from 'chalk';
import extraiLinks from './index.js';
import listaValidada from './http-validacao.js';

const caminho = process.argv;

async function imprimeLista(valida, resultado) {
  if (valida) {
    const linha = await listaValidada(resultado);
    linha.forEach((link) => {
      console.log(
        `${link.file} | ${link.href} | ${link.text} | ${link.status}`,
      );
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
