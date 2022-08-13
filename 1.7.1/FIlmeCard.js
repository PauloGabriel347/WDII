import todosOsFilmes from './filmes';

function FilmeCard({ filme }) {
  return (
    <div>
      <h1>
        {filme.oscar ? '🤏 ' : null}
        {filme.nome}
      </h1>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      {todosOsFilmes.map((filme) => (
        <FilmeCard filme={filme} />
      ))}
    </div>
  );
}
