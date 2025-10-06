import Personagem from "./Personagem.js";

export default class Guerreiro extends Personagem {
  forca: number;
  static tipo: string = "Guerreiro";
  static descricao: string = "Você será esmagado pela fúria do Guerreiro!";

  constructor(nome: string, forca: number) {
    super(nome, Guerreiro.tipo, Guerreiro.descricao);
    this.forca = forca;
  }

  obterInsignia() {
    if (this.level >= 7 && this.forca >= 5) {
      return `Guerreiro furioso!`;
    }
    return super.obterInsignia();
  }
}
