import fs from 'fs';
import chalk from "chalk";
//a biblioteca File system é nativa do node.js - não precisa fazer o npm install dela

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  // matchAll - método de strings
  //... expande o objeto iteravel  
  const resultados = capturas.map(captura => ({[captura[1]]: [captura[2]]}));
  //usamos o método map para percorrer um array e retornar outro array com o resultado que queremos
  //utilizamos os indíces 1 e 2 que representam os dois grupos de Regex que montamos anteriormente
  return resultados.length !== 0 ? resultados : 'não há links no arquivo'
  //verificamos o retorno para que ele não seja vazio e caso não haja um link ele retorna um erro
  //com isso, se resultados.length for diferente de 0, recebemos a mensagem 'não há links no arquivo'
}


function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

//código para acessar as informações dos links
//transformamos o código em assíncrono pois não sabemos o tamanho do arquivo
function pegaArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  return fs.promises.readFile(caminhoDoArquivo, encoding) 
    .then((texto) => extraiLinks(texto))
    .catch(trataErro)
}
//o método fs.promises.readFile é um método que garante que o JS não tenha problemas de sincronicidade ao processar arquivos grandes

pegaArquivo('./arquivo/texto.md')

export default pegaArquivo;
