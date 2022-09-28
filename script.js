function Enviar() {
var notaDoPrimeiroBimestre = document.getElementById("nota1")
var notaPriBi = notaDoPrimeiroBimestre.value;
var notaDoSegundoBimestre = document.getElementById("nota2")
var notaSegBi = notaDoSegundoBimestre.value;
var notaDoTerceiroBimestre = document.getElementById("nota3")
var notaTerBi = notaDoTerceiroBimestre.value;
var notaDoQuartoBimestre = document.getElementById("nota4")
var notaQuaBi = notaDoQuartoBimestre.value;

var notaFinal = parseFloat(notaPriBi) + parseFloat(notaSegBi) + parseFloat(notaTerBi) + parseFloat(notaQuaBi)
console.log(notaFinal)

var notaMédiaFinal = notaFinal / 4;
  var notaMédiaFinal = parseFloat(notaMédiaFinal)

var elementoMédiaFinal = document.getElementById("médiaFinal");
  var médiaFinal = "Sua média final é " + notaMédiaFinal;
  elementoMédiaFinal.innerHTML = médiaFinal;
  console.log(notaMédiaFinal);
}