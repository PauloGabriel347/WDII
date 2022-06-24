export const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const filtrarPersonagem = (personagem) => {
    const familiaUpper = props.familia.toUppercase();
    return personagem.toUppercase().includes(familiaUpper);
  };

  const mapearPersonagem = (personagem) => <li>{personagem}</li>;

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>{personagens.filter(filtrarPersonagem).map(mapearPersonagem)}</ul>
    </div>
  );
};
export default App;
