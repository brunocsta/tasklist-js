const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criarLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
  }
});

function limparInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criarTarefa(texto) {
  //console.log(texto);
  const elemento = criarLi();
  elemento.innerText = texto;
  tarefas.appendChild(elemento);
  limparInput();
}

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});
