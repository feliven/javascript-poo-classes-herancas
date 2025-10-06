export default class Personagem {
  nome;
  vida = 100;
  mana = 100;
  level;
  static tipo;

  constructor(nome, level, tipo) {
    this.nome = nome;
    this.level = level;
    this.tipo = tipo;
  }

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacável ${this.tipo}`;
    }
    return `${this.tipo} iniciante`;
  }
}
