// import fs from 'fs';
import chalk from 'chalk';
import { calculaStats } from './validate-stats.js';

function imprimeLista(argumentos, resultado) {
  if (argumentos.stats && argumentos.validate) {
    const stats = calculaStats(resultado);
    console.log(`${chalk.ansi256(21).bold(`Total: ${stats.total}`)}\n${chalk.ansi256(93).bold(`Unique: ${stats.unique}`)}\n${chalk.redBright.bold(`Broken: ${stats.broken}`)}`);
  } else if (argumentos.stats) {
    const stats = calculaStats(resultado);
    console.log('Estatística dos Links:');
    console.log(`${chalk.ansi256(21).bold(`Total: ${stats.total}`)}\n${chalk.ansi256(93).bold(`Unique: ${stats.unique}`)}`);
  } else if (argumentos.validate) {
    resultado.forEach((link) => {
      console.log(
        `${chalk.ansi256(218).bold(link.file)} | ${chalk.ansi256(56).bold(link.href)} | ${chalk.ansi256(255).bold(link.text)} | ${link.status}`,
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

export { imprimeLista };
