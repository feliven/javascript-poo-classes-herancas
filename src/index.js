import Personagem from "../src/modules/Personagem.js";
import Mago from "../src/modules/Mago.js";
import PersonagemView from "../src/components/personagem-view.js";

// const personagemPedrinho = new Personagem("Pedrinho", 5, "Mago");

const personagemPedrinho = new Mago("Pedrinho", 5, "fogo", 4, 5);

const personagemJose = new Personagem("José", 3, "Arqueiro");

const personagemFelipe = new Mago("Felipe", 4, "água", 3, 2);

console.log(personagemPedrinho);
console.log(personagemJose);
console.log(personagemFelipe);

console.log(`Insígnia de ` + personagemPedrinho.nome + `: ` + personagemPedrinho.obterInsignia());
console.log(`Insígnia de ` + personagemJose.nome + `: ` + personagemJose.obterInsignia());
console.log(`Insígnia de ` + personagemFelipe.nome + `: ` + personagemFelipe.obterInsignia());

const personagensExibidosNaTela = [personagemPedrinho, personagemJose, personagemFelipe];

new PersonagemView(personagensExibidosNaTela).render();
