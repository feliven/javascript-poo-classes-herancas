import Personagem from "../src/modules/Personagem.js";
import Mago from "../src/modules/Mago.js";
import Arqueiro from "../src/modules/Arqueiro.js";
import ArqueiroEMago from "./modules/ArqueiroEMago.js";
import PersonagemView from "../src/components/personagem-view.js";

// const personagemPedrinho = new Personagem("Pedrinho", 5, "Mago");

const personagemPedrinho = new Mago("Pedrinho", 5, "fogo", 4, 5);

const personagemJose = new Arqueiro("José", 3, 4);

const personagemFelipe = new Mago("Felipe", 4, "gelo", 3, 2);

const arqueiroBruno = new Arqueiro("Bruno", 7, 8);

const arqueiroMagoThiago = new ArqueiroEMago("Thiago", 3, 3, "ar", 4, 4);

console.log(personagemPedrinho);
console.log(personagemJose);
console.log(personagemFelipe);
console.log(arqueiroBruno);
console.log(arqueiroMagoThiago);

console.log(`Insígnia de ` + personagemPedrinho.nome + `: ` + personagemPedrinho.obterInsignia());
console.log(`Insígnia de ` + personagemJose.nome + `: ` + personagemJose.obterInsignia());
console.log(`Insígnia de ` + personagemFelipe.nome + `: ` + personagemFelipe.obterInsignia());
console.log(`Insígnia de ` + arqueiroBruno.nome + `: ` + arqueiroBruno.obterInsignia());
console.log(`Insígnia de ` + arqueiroMagoThiago.nome + `: ` + arqueiroMagoThiago.obterInsignia());

const personagensExibidosNaTela = [
  personagemPedrinho,
  personagemJose,
  personagemFelipe,
  arqueiroBruno,
  arqueiroMagoThiago,
];

new PersonagemView(personagensExibidosNaTela).render();

console.log(Personagem.verificarVencedor(arqueiroBruno, arqueiroMagoThiago));
