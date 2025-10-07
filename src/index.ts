import Personagem from "./modules/Personagem.js";
import Mago from "./modules/Mago.js";
import Arqueiro from "./modules/Arqueiro.js";
import ArqueiroEMago from "./modules/ArqueiroEMago.js";
import Guerreiro from "./modules/Guerreiro.js";
import PersonagemView from "./components/personagem-view.js";

// const personagemPedrinho = new Personagem("Pedrinho", 5, "Mago");

const personagemPedrinho: Personagem = new Mago("Pedrinho", "fogo", 4, 5);

const personagemJose: Personagem = new Arqueiro("José", 4);

const personagemFelipe: Personagem = new Mago("Felipe", "gelo", 3, 2);

const arqueiroBruno: Personagem = new Arqueiro("Bruno", 8);

const arqueiroMagoThiago: Personagem = new ArqueiroEMago("Thiago", 3, "ar", 4, 4);

const guerreiroJoao: Personagem = new Guerreiro("João", 6);

console.log(personagemPedrinho);
console.log(personagemJose);
console.log(personagemFelipe);
console.log(arqueiroBruno);
console.log(arqueiroMagoThiago);
console.log(guerreiroJoao);

console.log(`Insígnia de ` + personagemPedrinho.nome + `: ` + personagemPedrinho.obterInsignia());
console.log(`Insígnia de ` + personagemJose.nome + `: ` + personagemJose.obterInsignia());
console.log(`Insígnia de ` + personagemFelipe.nome + `: ` + personagemFelipe.obterInsignia());
console.log(`Insígnia de ` + arqueiroBruno.nome + `: ` + arqueiroBruno.obterInsignia());
console.log(`Insígnia de ` + arqueiroMagoThiago.nome + `: ` + arqueiroMagoThiago.obterInsignia());
console.log(`Insígnia de ` + guerreiroJoao.nome + `: ` + guerreiroJoao.obterInsignia());

const personagensExibidosNaTela: Personagem[] = [
  personagemPedrinho,
  personagemJose,
  personagemFelipe,
  arqueiroBruno,
  arqueiroMagoThiago,
  guerreiroJoao,
];

new PersonagemView(personagensExibidosNaTela).render();
