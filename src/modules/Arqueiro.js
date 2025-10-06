import Personagem from "./Personagem.js";

export default class Arqueiro extends Personagem {
  destreza;
  static tipo = "Arqueiro";
  static descricao = "Você tem o meu arco!";

  constructor(nome, level, destreza) {
    super(nome, level, Arqueiro.tipo, Arqueiro.descricao);
    this.destreza = destreza;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return `Dominador de flechas`;
    }
    return super.obterInsignia();
  }
}
