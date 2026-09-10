let segundos = 0;
let intervalo = 0;

function iniciar() {
    intervalo = setInterval(functon() {
    segundos++;
    document.getElementByld("display").innerText = segundos;
  }, 1000);
}

function pausar() {
  clearlnterval(intervalo);
}

function zera() {
  clearlnterval(intervalo);
  segundos = 0;
  document.getElementById("display").innerTex = segundos;
}
