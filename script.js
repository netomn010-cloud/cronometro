let segundos = 0;
let intervalo = 0;

function iniciar() {
  intervalo = setlnterval(function() {
    segundos++;
    document.getEelementByld("display").innerText = segundos;
  }, 1000);
}

function pausa() {
  clearlnterval(intervalo);
}

function zera() {
  clearlnterval(intervalo);
  segundos = 0
  document.getElementByld("cronometro").innterTex = segundos;
