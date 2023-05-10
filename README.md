# Markdown Links

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Ferramentas utilizadas](#3-ferramentas)

***

## 1. Resumo do projeto
Neste projeto foi criado uma ferramenta de linha de comando (CLI) para validação de links de arquivos Markdown (.md)
e que foi implementado em JavaScript para serem executadas com Node.JS.


## 2. Funcionalidades
A execução do módulo ocorre através do comando:

`npm install md-links-laboratoria-gss`

![2023-05-10](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/6629f996-69fc-4873-9bed-91790ce80861)

### Comandos:
`md-links ./arquivo/nomeDoArquivo.md` :

Vai trazer o caminho, a lista e o nome dos links

![2023-05-10 (1)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/17eba0df-8d81-43cc-973c-4da7920c7a8e)


`md-links ./arquivo/nomeDoArquivo.md --validate` :

Ao inserir a flag --validate vai retornar os links com o status de válidos ou inválidos, e também os links não encontrados.

![2023-05-10 (2)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/5b8e1c4a-7456-41fc-aa65-46a57088cdf1)



`md-links ./arquivo/nomeDoArquivo.md --stats` :

Ao inserir a flag --stats vai retornar a estatística dos links, mostrando o total de link e os links únicos.

![2023-05-10 (3)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/027d2d3b-ec1a-46d7-bde6-d65f4b985bc9)



`md-links ./arquivo/nomeDoArquivo.md --stats --validate`: 

Ao inserir as flags --stats e --validate vai retornar a estatística dos links juntamente com os links que estão quebrados.

![2023-05-10 (4)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/be2f5d41-73ed-44c4-b093-b29c5ee809e7)



## 3. Ferramentas utilizadas

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30px";/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30px";/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30px";/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="30px";/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" height="30px";/>   
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="30px";/>  
</div>



