import Personagem from "./Personagem.js";

export default class Arqueiro extends Personagem {
  destreza;
  tipo = "Arqueiro";

  constructor(nome, level, destreza) {
    super(nome, level, "Arqueiro");
    this.destreza = destreza;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return `Dominador de flechas`;
    }
    return super.obterInsignia();
  }
}
