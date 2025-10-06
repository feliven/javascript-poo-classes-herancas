export default class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;
  descricao;

  constructor(nome, vida, mana, level, tipo, descricao) {
    this.nome = nome;
    this.vida = 100;
    this.mana = 100;
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
}
