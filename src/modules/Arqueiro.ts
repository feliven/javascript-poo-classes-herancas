import Personagem from "./Personagem.js";

export default class Arqueiro extends Personagem {
  destreza: number;
  static tipo: string = "Arqueiro";
  static descricao: string = "Você tem o meu arco!";

  constructor(nome: string, destreza: number) {
    super(nome, Arqueiro.tipo, Arqueiro.descricao);
    this.destreza = destreza;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return `Dominador de flechas`;
    }
    return super.obterInsignia();
  }
}
