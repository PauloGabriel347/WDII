let Valor = 100;
let Convenio = false;
let CartaoLoja = false;

function compraMercado() {
  if (Convenio == true && CartaoLoja == true) {
    ValorDesconto = (15 / 100) * Valor;
    Valor = Valor - ValorDesconto;
  }
  if (
    (Convenio == true && CartaoLoja == false) ||
    (Convenio == false && CartaoLoja == true)
  ) {
    ValorDesconto = (10 / 100) * Valor;
    Valor = Valor - ValorDesconto;
  } else {
    Valor = Valor;
  }
  return Valor;
}
compraMercado();
console.log(Valor);
