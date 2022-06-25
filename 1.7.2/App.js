import { useState } from 'react';

export const App = () => {
  const [pesquisa, setPesquisa] = useState('');
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const filtrarPersonagem = (personagem) => {
    const familiaUpper = pesquisa.toUpperCase();
    return personagem.toUpperCase().includes(familiaUpper);
  };

  const mapearPersonagem = (personagem) => <li>{personagem}</li>;

  const onChangeHandler = (event) => {
    setPesquisa(event.target.value);
  };

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <input onChange={onChangeHandler} />
      <ul>{personagens.filter(filtrarPersonagem).map(mapearPersonagem)}</ul>
    </div>
  );
};

export const App2 = () => {
  const [numero, setNumero] = useState(0);

  const IncrementoCallback = () => {
    setNumero(numero + 1);
    localStorage.setItem('numero', numero);
  };

  return (
    <div>
      <p> Numero de vezes clickado: {numero}</p>
      <button onClick={IncrementoCallback}>Incremento</button>
    </div>
  );
};
export default App;
