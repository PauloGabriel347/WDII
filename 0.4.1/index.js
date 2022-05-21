const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

const calculoMedia = alunos.map(function (item) {
  const mediaGeral = item.notas.reduce((acumulador, item) => {
    return acumulador + item.nota;
  }, 0);
  item.mediaGeral = mediaGeral / item.notas.length;
  return item;
});

console.log(calculoMedia);
