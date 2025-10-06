export default class Personagem {
  nome: string;
  vida: number = 100;
  mana: number = 100;
  protected level: number;
  static tipo: string;
  static descricao: string;

  constructor(nome, tipo, descricao) {
    this.nome = nome;
    this.level = 1;
    Personagem.tipo = tipo;
    Personagem.descricao = descricao;
  }

  aumentarLevel() {
    this.level += 1;
    // Para chamarmos o método set level(), a chamada precisa ter o mesmo nome da função — ou seja, level - por isso retiramos o sinal # dos métodos.
  }

  diminuirLevel() {
    this.level -= 1;
  }

  setLevel(novoLevel) {
    if (novoLevel >= 1 && novoLevel <= 10) {
      this.level = novoLevel;
    }
  }

  getLevel() {
    return this.level;
  }

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacável ${Personagem.tipo}`;
    }
    return `${Personagem.tipo} iniciante`;
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
