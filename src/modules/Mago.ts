import Personagem from "./Personagem.js";

export default class Mago extends Personagem {
  elementoMagico: string;
  levelMagico: number;
  inteligencia: number;
  static tipo: string = "Mago";
  static descricao: string = "O mago é implacável!";

  constructor(nome: string, elementoMagico: string, levelMagico: number, inteligencia: number) {
    super(nome, Mago.tipo, Mago.descricao);
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }

  obterInsignia(): string {
    if (this.levelMagico >= 5 && this.inteligencia >= 5) {
      return `Mestre do ${this.elementoMagico}`;
    }
    return super.obterInsignia();
  }
}
