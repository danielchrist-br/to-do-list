const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("a");
  botaoDeleta.href = "#";
  botaoDeleta.innerHTML = '<img src="./img/remove.svg" alt="Remover tarefa">';

  botaoDeleta.addEventListener("click", excluirTarefa);

  return botaoDeleta;
};

const excluirTarefa = (evento) => {
  const botaoDeleta = evento.target;
  const tagA = botaoDeleta.parentElement;
  const tarefaCompleta = tagA.parentElement;

  tarefaCompleta.remove();
};

export default BotaoDeleta;