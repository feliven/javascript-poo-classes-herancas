import Personagem from "./Personagem.js";
import Mago from "./Mago.js";
import Arqueiro from "./Arqueiro.js";

export default class ArqueiroEMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  elementoMagico;
  levelMagico;
  inteligencia;
  static tipo = "ArqueiroMago";

  constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome, level, ArqueiroEMago.tipo);
    this.ladoArqueiro = new Arqueiro(nome, level, destreza);
    this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia);
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
  }
}
