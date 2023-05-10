/* eslint-disable no-undef */
import chalk from 'chalk';
import {
  extrairLinks,
  checkStatus,
  listaValidada,
} from '../src/validate-stats.js';

describe('extrairLinks', () => {
  it('Deve retornar um array com os links extraídos do objeto', () => {
    const arrayLinks = [
      { href: 'https://www.google.com' },
      { href: 'https://www.facebook.com' },
      { href: 'https://www.instagram.com' },
    ];

    const linksExtraidos = extrairLinks(arrayLinks);

    expect(linksExtraidos).toEqual([
      'https://www.google.com',
      'https://www.facebook.com',
      'https://www.instagram.com',
    ]);
  });
});

describe('checkStatus', () => {
  it('deve ser uma função', () => {
    expect(typeof checkStatus).toBe('function');
  });

  it('deve retornar um array com o status da URL', async () => {
    const listaURLs = ['https://www.google.com', 'https://www.instagram.com'];
    const expectedOutput = [
      `${chalk.ansi256(125).bold('200 \u2192 OK \u2714')}`,
      `${chalk.ansi256(125).bold('200 \u2192 OK \u2714')}`,
    ];
    const result = await checkStatus(listaURLs);
    expect(result).toEqual(expectedOutput);
  });
});

describe('listaValidada', () => {
  it('deve retornar uma lista de objetos com os códigos de status HTTP', async () => {
    const listaDeLinks = [
      { url: 'https://www.google.com', nome: 'Google' },
      { href: 'https://www.facebook.com', nome: 'Facebook' },
      { href: 'https://www.twitter.com', nome: 'Twitter' }];

    const listaEsperada = [
      { url: 'https://www.google.com', nome: 'Google', status: 'ocorreu algum erro' },
      { href: 'https://www.facebook.com', nome: 'Facebook', status: chalk.ansi256(125).bold(`${200} \u2192 OK \u2714`) },
      { href: 'https://www.twitter.com', nome: 'Twitter', status: 'ocorreu algum erro' }];

    const listaObtida = await listaValidada(listaDeLinks);
    expect(listaObtida).toEqual(listaEsperada);
  });
});
