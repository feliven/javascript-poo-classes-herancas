export default class Personagem {
    nome;
    vida = 100;
    mana = 100;
    level;
    tipo;
    descricao;
    constructor(nome, tipo, descricao) {
        this.nome = nome;
        this.level = 1;
        this.tipo = tipo;
        this.descricao = descricao;
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
            return `Implacável ${this.tipo}`;
        }
        return `${this.tipo} iniciante`;
    }
    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.level === personagem2.level) {
            return "Empate!";
        }
        if (personagem1.level > personagem2.level) {
            return `${personagem1.tipo} ${personagem1.nome} ganhou!`;
        }
        return `${personagem2.tipo} ${personagem2.nome} ganhou!`;
    }
}
