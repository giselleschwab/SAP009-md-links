import chalk from 'chalk';
import { manejaErros } from './erros.js';

function extrairLinks(arrayLinks) {
  return arrayLinks.map((objetoLink) => objetoLink.href);
}

function checkStatus(listaURLs) {
  const arrStatus = Promise.all(
    listaURLs.map((url) => fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return chalk.ansi256(125).bold(`${response.status} \u2192 OK \u2714`);
        }
        if (response.status !== 200) {
          return chalk.ansi256(160).bold(`\u2717 ${response.status} \u2192 FAIL \u2717`);
        }
        return `${response.status} - ${response.statusText}`;
      })
      .catch((erro) => manejaErros(erro))),
  );
  return arrStatus;
}

function calculaStats(links) {
  const total = links.length;
  const unique = new Set(links.map((link) => link.href)).size;
  const broken = links.filter((link) => (!link.status.includes('OK'))).length;

  const stats = {
    total,
    unique,
    broken,
  };

  return stats;
}

function listaValidada(listaDeLinks) {
  const links = extrairLinks(listaDeLinks);
  return checkStatus(links).then((status) => listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice],
  })));
}

export {
  extrairLinks,
  checkStatus,
  listaValidada,
  calculaStats,
};
