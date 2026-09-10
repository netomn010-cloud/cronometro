let segundo = 0;
let intervalo = 0
function iniciar (){
  intervalo = setlnterval(function(){
    segundos++;
    document.getEelementByld("cronometro").innerText=segundos;
  },1000);
}
function para(){
  clearlnterval(intervalo);
}
function zera(){
  clearlnterval(interrvalo);
  segundos =0
  document.getElementByld("cronometro").innterTex = segundos;
