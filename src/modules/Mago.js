import Personagem from "./Personagem.js";

export default class Mago extends Personagem {
  elementoMagico;
  levelMagico;
  inteligencia;
  static tipo = "Mago";

  constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
    super(nome, level, Mago.tipo);
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }

  obterInsignia() {
    if (this.levelMagico >= 5 && this.inteligencia >= 5) {
      return `Mestre do ${this.elementoMagico}`;
    }
    return super.obterInsignia();
  }
}
