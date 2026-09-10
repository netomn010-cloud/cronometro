let segundos = 0;
let intervalo = null;

function iniciar() {
if (intervalo === null) {
intervalo = setInterval(function() {
segundos++;

let horas = Math.floor(segundos / 3600);
let minutos = Math.floor((segundos % 3600) / 60);
let segundosRestantes = segundos % 60;

horas = String(horas).padStart(2, "0");
minutos = String(minutos).padStart(2, "0");
segundosRestantes = String(segundosRestantes).padStart(2, "0");

document.getElementById("display").innerText =
horas + ":" + minutos + ":" + segundosRestantes;
}, 1000);
}
}

function pausar() {
clearInterval(intervalo);
intervalo = null;
}

function zera() {
clearInterval(intervalo);
intervalo = null;
segundos = 0;

document.getElementById("display").innerText = "00:00:00";
}
