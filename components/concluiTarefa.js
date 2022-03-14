const InputConclui = () => {
  const inputTarefa = document.createElement("input");
  inputTarefa.type = "checkbox";

  inputTarefa.addEventListener("click", concluirTarefa);

  return inputTarefa;
};

const concluirTarefa = (evento) => {
  const inputConclui = evento.target;
  const divDoInput = inputConclui.parentElement;
  const tarefaCompleta = divDoInput.parentElement;

  tarefaCompleta.classList.toggle("done");
};


export default InputConclui;