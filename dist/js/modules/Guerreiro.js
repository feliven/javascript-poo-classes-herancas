import Personagem from "./Personagem.js";
export default class Guerreiro extends Personagem {
    forca;
    static tipo = "Guerreiro";
    static descricao = "Você será esmagado pela fúria do Guerreiro!";
    constructor(nome, forca) {
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
