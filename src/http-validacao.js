// import chalk from 'chalk';
// lista que só tenha urls
function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => objetoLink.href);
}

function manejaErros(erro) {
  if (erro.cause.code === 'ENOTFOUND') {
    return 'link não encontrado';
  }
  return 'ocorreu algum erro';
}

function checkStatus(listaURLs) {
  const arrStatus = Promise.all(
    listaURLs.map((url) => fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return `${response.status} | 'OK'`;
        }
        if (response.status !== 200) {
          return `${response.status} | 'FAIL'`;
        }
        return `${response.status} - ${response.statusText}`;
      })
      .catch((erro) => manejaErros(erro))),
  );
  return arrStatus;
}

function statusBroken(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  const arrStatus = checkStatus(links);
  const linksBroken = [];

  return arrStatus.then((statusLinks) => {
    statusLinks.forEach((status, index) => {
      if (status.includes('FAIL') || status.includes('ENOTFOUND') || status.includes('link não encontrado')) {
        linksBroken.push(links[index]);
      }
    });
    return linksBroken;
  });
}

function listaValidada(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  return checkStatus(links).then((status) => listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice],
  })));
}

export { listaValidada, statusBroken };
