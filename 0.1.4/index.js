function quantosKgComprar(quantidadeAlunos) {
  const numeroBananas = quantidadeAlunos * 2;
  const qntGramas = numeroBananas * 90;
  const comMargem = qntGramas + qntGramas * 0.2;
  return comMargem / 1000;
}

console.log(quantosKgComprar(200));
