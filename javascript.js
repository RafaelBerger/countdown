const segundosNaTela = document.querySelector("#segundos");
const minutosNaTela = document.querySelector("#minutos");
const horasNaTela = document.querySelector("#horas");
const diasNaTela = document.querySelector("#dias");

let temaDaContagem = document.querySelector("#tema");
temaDaContagem.innerHTML = "Ano novo";

function countdown() {
  const anoNovo = new Date(2022, 0, 1);
  const dataAtual = new Date();

  const segundosTotal = Math.floor((anoNovo - dataAtual) / 1000);

  const segundos = Math.floor(segundosTotal % 60);
  const minutos = Math.floor(segundosTotal / 60) % 60;
  const horas = Math.floor(segundosTotal / 3600) % 24;
  const dias = Math.floor(segundosTotal / 3600 / 24);

  segundosNaTela.innerHTML = converteTempo(segundos);
  minutosNaTela.innerHTML = converteTempo(minutos);
  horasNaTela.innerHTML = converteTempo(horas);
  diasNaTela.innerHTML = converteTempo(dias);
}

function converteTempo(tempo) {
  if (tempo < 10) {
    return `0${tempo}`;
  } else {
    return tempo;
  }
}

setInterval(countdown, 1000);
