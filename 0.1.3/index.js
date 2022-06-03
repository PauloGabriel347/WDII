const anos = ['2012', '2010', '2020', '2022', '2035', '2045'];
let anosAnteriores = [];
let anosMaiores = [];
let decimos = [];

function menorAnoPassado() {
  for (let i = 0; i < anos.length; i++) {
    if (anos[i] <= 2021) {
      anosAnteriores.push(anos[i]);
    }
  }
  return anosAnteriores;
}

function maiorAnoPassado() {
  for (let i = 0; i < anos.length; i++) {
    if (anos[i] >= 2021) {
      anosMaiores.push(anos[i]);
    }
  }
  return anosMaiores;
}

function anosDecimos() {
  for (let i = 0; i < anos.length; i++) {}
  return anosDecimos;
}
