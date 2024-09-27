# Markdown Links

<div align="center">
  <p> Ferramentas utilizadas </p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30px";/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30px";/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30px";/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="30px";/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" height="30px";/>   
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="30px";/>  
</div>

## Project Summary

* [1. Project Overview](#1-resumo-do-projeto)
* [2. Features](#2-funcionalidades)
* [3. Developer](#3-Desenvolvedora)

***

## 1.Project Overview
A command-line interface (CLI) tool was developed along with a JavaScript library. This backend project primarily used Node.js for code development and Jest for running tests.

The main goal of this library is to read Markdown files on your system and check for the presence of links in those files. Additionally, it can verify the validity of the links and generate relevant statistics. The library can be executed via the command line or imported using require to be used in other projects.


## 2. Features
The module is executed using the following command:

`npm install md-links-laboratoria-gss`

![2023-05-10](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/6629f996-69fc-4873-9bed-91790ce80861)

### Commands:
`md-links ./arquivo/nomeDoArquivo.md` :

Returns the path, list, and names of the links.

![2023-05-10 (1)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/17eba0df-8d81-43cc-973c-4da7920c7a8e)


`md-links ./arquivo/nomeDoArquivo.md --validate` :

When using the --validate flag, it will return the links along with their status, showing whether they are valid or invalid, as well as links that could not be found.

![2023-05-10 (2)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/5b8e1c4a-7456-41fc-aa65-46a57088cdf1)



`md-links ./arquivo/nomeDoArquivo.md --stats` :

When using the --stats flag, it will return the link statistics, showing the total number of links and the number of unique links.

![2023-05-10 (3)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/027d2d3b-ec1a-46d7-bde6-d65f4b985bc9)



`md-links ./arquivo/nomeDoArquivo.md --stats --validate`: 

When using both the --stats and --validate flags, it will return link statistics along with a list of broken links.

![2023-05-10 (4)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/be2f5d41-73ed-44c4-b093-b29c5ee809e7)


## 3. Developed by:
Giselle Schwab


