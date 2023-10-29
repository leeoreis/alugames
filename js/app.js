function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");
  let nomeJogo = gameClicado.querySelector(".dashboard__item__name");
  let faixaStatus = gameClicado.querySelector(".dashboard__item__img__status");
  let status = imagem.classList.contains("dashboard__item__img--rented")
    ? "Alugado"
    : "Disponível";

  if (status == "Disponível") {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.innerHTML = "Devolver";
    nomeJogo.classList.add("dashboard__item__name--rented");
    faixaStatus.classList.add("status--rented");
    faixaStatus.innerHTML = "Alugado";
  } else {
    imagem.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    botao.innerHTML = "Alugar";
    nomeJogo.classList.remove("dashboard__item__name--rented");
    faixaStatus.classList.remove("status--rented");
    faixaStatus.innerHTML = "";
  }
}
