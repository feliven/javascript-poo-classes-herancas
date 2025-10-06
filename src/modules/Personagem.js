export default class Personagem {
  nome;
  vida = 100;
  mana = 100;
  level;
  static tipo;
  static descricao;

  constructor(nome, level, tipo, descricao) {
    this.nome = nome;
    this.level = level;
    this.tipo = tipo;
    this.descricao = descricao;
  }

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacável ${this.tipo}`;
    }
    return `${this.tipo} iniciante`;
  }

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return "Empate!";
    }
    if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} ganhou!`;
    }
    return `${personagem2.constructor.tipo} ${personagem2.nome} ganhou!`;
  }
}
