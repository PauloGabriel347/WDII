import { useState } from 'react';

export const App = () => {
  const [familia, setFamilia] = useState('');
  const personagens = [
    'Jill Valentine',
    'Jack Baker',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
    'Lucas Baker',
  ];

  const filtrarPersonagem = (personagem) => {
    const familiaUpper = familia.toUpperCase();
    return personagem.toUpperCase().includes(familiaUpper);
  };

  const mapearPersonagem = (personagem) => <li>{personagem}</li>;

  const redfield = (event) => {
    setFamilia('Redfield');
  };
  const baker = (event) => {
    setFamilia('Baker');
  };

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <button onClick={redfield}>Redfield</button>
      <button onClick={baker}>Baker</button>
      <ul>{personagens.filter(filtrarPersonagem).map(mapearPersonagem)}</ul>
    </div>
  );
};
export default App;
