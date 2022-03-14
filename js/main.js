import BotaoDeleta from "../components/deletaTarefa.js";
import DivCheck from "../components/tarefasCabecalho.js";

const lista = document.querySelector("[data-list]");
const botaoForm = document.querySelector("[data-form-button]");

const HandleTarefa = (event) => {
  event.preventDefault();
  const inputForm = document.querySelector("[data-form-input]");

  const tarefa = document.createElement("li");
  tarefa.classList.add("lista-tarefas_item");

  tarefa.appendChild(DivCheck());
  tarefa.appendChild(BotaoDeleta());

  lista.appendChild(tarefa);

  inputForm.value = "";
};

botaoForm.addEventListener("click", (event) => HandleTarefa(event));
