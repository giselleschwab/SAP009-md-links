/* eslint-disable no-undef */
import { imprimeLista } from '../src/cli';

const spyLog = jest.spyOn(console, 'log').mockImplementation();

describe('imprimeLista', () => {
  it('deve exibir a lista de resultados quando não tiver argumentos stats ou validate', () => {
    const argumentos = {
      stats: false,
      validate: false,
    };
    const arquivos = [{}, {}, {}];
    imprimeLista(argumentos, arquivos);
    expect(spyLog).toHaveBeenCalledWith('undefined | undefined | undefined');
  });
});
