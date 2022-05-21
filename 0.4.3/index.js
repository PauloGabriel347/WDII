const arquivos = [
  {
    id: 1,
    nome: 'Meu Trabalho v1',
    excluido: false,
  },
  {
    id: 2,
    nome: 'Meu Trabalho v2',
    excluido: false,
  },
  {
    id: 3,
    nome: 'Meu Trabalho v3',
    excluido: false,
  },
  {
    id: 4,
    nome: 'Meu Trabalho v4',
    excluido: true,
  },
];

arquivos.forEach((arquivos) => {
  arquivos.excluido = !arquivos.excluido;
});

console.log(arquivos);
