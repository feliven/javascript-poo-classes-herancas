export default class Personagem {
  nome: string;
  vida: number = 100;
  mana: number = 100;
  protected level: number;
  tipo: string;
  descricao: string;

  constructor(nome: string, tipo: string, descricao: string) {
    this.nome = nome;
    this.level = 1;
    this.tipo = tipo;
    this.descricao = descricao;
  }

  aumentarLevel(): void {
    this.level += 1;
    // Para chamarmos o método set level(), a chamada precisa ter o mesmo nome da função — ou seja, level - por isso retiramos o sinal # dos métodos.
  }

  diminuirLevel(): void {
    this.level -= 1;
  }

  setLevel(novoLevel: number): void {
    if (novoLevel >= 1 && novoLevel <= 10) {
      this.level = novoLevel;
    }
  }

  getLevel(): number {
    return this.level;
  }

  obterInsignia(): string {
    if (this.level >= 5) {
      return `Implacável ${this.tipo}`;
    }
    return `${this.tipo} iniciante`;
  }

  static verificarVencedor(personagem1: Personagem, personagem2: Personagem): string {
    if (personagem1.level === personagem2.level) {
      return "Empate!";
    }
    if (personagem1.level > personagem2.level) {
      return `${personagem1.tipo} ${personagem1.nome} ganhou!`;
    }
    return `${personagem2.tipo} ${personagem2.nome} ganhou!`;
  }
}
