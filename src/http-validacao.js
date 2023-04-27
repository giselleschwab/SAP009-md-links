import chalk from "chalk";
//lista que só tenha urls
function extraiLinks (arrLinks) {
    //loop do array
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

function checkStatus (listaURLs) {
    const arrStatus = Promise
    .all(
    listaURLs.map((url) => {
      return fetch(url)
    .then((response) => {
      return `${response.status} - ${response.statusText}`;
    })
    .catch((erro) => {
      return manejaErros(erro);
    })          
})
)
 return arrStatus;
}

function manejaErros (erro) {
   if (erro.cause.code === 'ENOTFOUND') {
    return 'link não encontrado';
   } else {
    return 'ocorreu algum erro';
   }
}

export default function listaValidada (listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    return checkStatus(links).then((status) => {
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    })
    )}
)}


