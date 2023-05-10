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
A execução do módulo ocorre através da execução do seguinte comando:
`npm install md-links-laboratoria-gss`

### Comandos:
`md-links ./arquivo/nomeDoArquivo.md` :

Vai trazer o caminho, a lista e o nome dos links


md-links ./arquivo/nomeDoArquivo.md `--validate` :

Ao inserir a flag --validate vai retornar a lista com os links válidos, os links inválidos e quais links não exitem.


md-links ./arquivo/nomeDoArquivo.md `--stats` :

Ao inserir a flag --stats vai retornar a estatística dos links, mostrando o total de link e os links únicos.


md-links ./arquivo/nomeDoArquivo.md `--stats --validate`: 

Ao inserir as flags --stats e --validate vai retornar a estatística dos links juntamente com os links que estão quebrados.




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

