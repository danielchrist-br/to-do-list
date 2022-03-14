const Conteudo = () => {
  const inputForm = document.querySelector("[data-form-input]");
  const valorDaTarefa = inputForm.value;

  const conteudo = document.createElement("span");
  conteudo.innerHTML = valorDaTarefa;

  return conteudo;
};


export default Conteudo;