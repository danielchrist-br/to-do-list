import InputConclui from "./concluiTarefa.js";
import Conteudo from "./tarefasConteudo.js";

const DivCheck = () => {
  const divCheck = document.createElement("div");
  divCheck.classList.add("lista-tarefas_check");

  divCheck.appendChild(InputConclui());
  divCheck.appendChild(Conteudo());

  return divCheck;
};

export default DivCheck;