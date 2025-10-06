const fundo = document.getElementById("fundo-modal") as HTMLElement;
const modal = document.getElementById("modal") as HTMLElement;
const mensagemModal = modal.querySelector(".mensagem") as HTMLElement;
const botaoFechar = document.getElementById("fechar-botao") as HTMLButtonElement;

const removerModal = () => {
  fundo.classList.remove("visivel");
  modal.classList.remove("visivel");
};

botaoFechar.addEventListener("click", removerModal);
fundo.addEventListener("click", removerModal);

export const mostrarModal = (mensagem = "") => {
  mensagemModal.innerText = mensagem;
  modal.classList.add("visivel");
  fundo.classList.add("visivel");
};
