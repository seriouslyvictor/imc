const alturaEl =  document.querySelector(".altura");
const pesoEl =  document.querySelector(".peso");
const resultadoEl = document.querySelector(".imcresultado");

document.querySelector(".primario").addEventListener("click", calcularImc);
document.querySelector(".secundario").addEventListener("click", limpar);


function limpar() {
  resultadoEl.textContent = "❓ Descubra o seu IMC ❓";
}

function calcularImc() {
  const altura = parseFloat(alturaEl.value);
  const peso = parseInt(pesoEl.value);
  if (isNaN(altura) || (altura <= 0 || altura > 2.5)) {
    alert("Altura inválida...");
    altura.focus()
    return;
  }
  if (isNaN(peso) || (peso <= 0 || peso > 300)) {
    alert("Peso inválido...");
    pesoEl.focus()
    return;
  }

  let imc = peso / (altura * altura);
  let faixa = "";

  if (imc <= 18.5) faixa = "magro";
  else if (imc > 18.5 && imc <= 24.9) faixa = "na medida";
  else if (imc > 24.9 && imc <= 29.9) faixa = "sobrepeso";
  else if (imc > 29.9 && imc <= 34.9) faixa = "obeso";
  else if (imc > 34.9 && imc <= 39.9) faixa = "obesidade grau II";
  else faixa = "obesidade grau III";
  resultadoEl.textContent = `O seu IMC é de ${imc.toFixed(2)}, você é considerado ${faixa}.`;
}
