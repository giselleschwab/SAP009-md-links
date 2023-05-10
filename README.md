# Markdown Links

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Checklist](#3-checklist)

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


md-links ./arquivo/nomeDoArquivo.md `--validate` :

Ao inserir a flag --validate vai retornar os links com o status de válidos ou inválidos, e também os links não encontrados.

![2023-05-10 (2)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/5b8e1c4a-7456-41fc-aa65-46a57088cdf1)



md-links ./arquivo/nomeDoArquivo.md `--stats` :

Ao inserir a flag --stats vai retornar a estatística dos links, mostrando o total de link e os links únicos.

![2023-05-10 (3)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/027d2d3b-ec1a-46d7-bde6-d65f4b985bc9)



md-links ./arquivo/nomeDoArquivo.md `--stats --validate`: 

Ao inserir as flags --stats e --validate vai retornar a estatística dos links juntamente com os links que estão quebrados.

![2023-05-10 (4)](https://github.com/giselleschwab/SAP009-md-links/assets/118859853/23e23621-ab98-411a-af84-134138510cb8)


## 3. Checklist

### General

* [ ] Poder instalar via `npm install --global <github-user>/md-links`

### `README.md`

* [ ] Um board com o backlog das implementações da sua biblioteca
* [ ] Documentação técnica da sua biblioteca
* [ ] Guia de uso e instalação da biblioteca

### API `mdLinks(path, opts)`

* [ ] O módulo exporta uma função com a interface (API) esperada
* [ ] Implementa suporte para arquivo individual
* [ ] Implementa suporte para diretórios
* [ ] Implementa `options.validate`

### CLI

* [ ] Possuir o executável `md-links` no path (configurado no `package.json`)
* [ ] Executar sem erros e ter o resultado esperado
* [ ] Implementar `--validate`
* [ ] Implementar `--stats`

