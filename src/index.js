#!/usr/bin/env node
import { mdLinks } from './links.js';

const parametros = {
  caminho: process.argv[2],
  stats: process.argv.includes('--stats'),
  validate: process.argv.includes('--validate'),
};

mdLinks(parametros);
