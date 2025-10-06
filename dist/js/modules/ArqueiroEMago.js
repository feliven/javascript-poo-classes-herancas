import Personagem from "./Personagem.js";
import Mago from "./Mago.js";
import Arqueiro from "./Arqueiro.js";
export default class ArqueiroEMago extends Personagem {
    ladoArqueiro;
    ladoMago;
    elementoMagico;
    levelMagico;
    inteligencia;
    static tipo = "ArqueiroMago";
    static descricao = "Detentor de lanças e flechas mágicas!";
    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, ArqueiroEMago.tipo, ArqueiroEMago.descricao);
        this.ladoArqueiro = new Arqueiro(nome, destreza);
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
    }
    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
    }
}
