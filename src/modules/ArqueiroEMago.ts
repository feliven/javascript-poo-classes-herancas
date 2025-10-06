import Personagem from "./Personagem.js";
import Mago from "./Mago.js";
import Arqueiro from "./Arqueiro.js";

export default class ArqueiroEMago extends Personagem {
  ladoArqueiro: Arqueiro;
  ladoMago: Mago;
  elementoMagico: string;
  levelMagico: number;
  inteligencia: number;
  static tipo: string = "ArqueiroMago";
  static descricao: string = "Detentor de lanças e flechas mágicas!";

  constructor(nome: string, destreza: number, elementoMagico: string, levelMagico: number, inteligencia: number) {
    super(nome, ArqueiroEMago.tipo, ArqueiroEMago.descricao);
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
  }
}
