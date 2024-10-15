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
  criarBtnApagar(elemento);
  salvarTarefas();
}

btnTarefa.addEventListener("click", () => {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value);
});

function criarBtnApagar(li) {
  li.innerText += " ";
  const btnApagar = document.createElement("button");
  btnApagar.innerText = "Apagar";
  btnApagar.classList.add("apagar");
  btnApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(btnApagar);
}

document.addEventListener("click", function (e) {
  const elemento = e.target;
  //console.log(elemento);
  if (elemento.classList.contains("apagar")) {
    elemento.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  //console.log(liTarefas);
  const listaTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    //console.log(tarefaTexto)
    listaTarefas.push(tarefaTexto);
  }
  //console.log(listaTarefas)
  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function carregarTarefas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
}

carregarTarefas();
