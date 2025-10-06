import Personagem from "../src/modules/Personagem.js";
import PersonagemView from "../src/components/personagem-view.js";

const personagemPedrinho = new Personagem("Pedrinho", 7, 12, 5, "Mago");

const personagemJose = new Personagem("José", 7, 6, 3, "Arqueiro");

const personagemFelipe = new Personagem("Felipe", 8, 10, 5, "Mago");

console.log(personagemPedrinho);
console.log(personagemJose);
console.log(personagemFelipe);

console.log(`Insígnia de ` + personagemPedrinho.nome + `: ` + personagemPedrinho.obterInsignia());
console.log(`Insígnia de ` + personagemJose.nome + `: ` + personagemJose.obterInsignia());

const personagensExibidosNaTela = [personagemPedrinho, personagemJose, personagemFelipe];

new PersonagemView(personagensExibidosNaTela).render();
