import { filmes } from './filmes';
import { filmes2 } from './filme2';

function Filmes() {
  function filtrarFilmesAnos(ano = 2000) {
    return filmes.filter((filme) => filme.lancamento > ano);
  }
  function mapearFilmes(filmes) {
    return filmes
      .map((filme) => filme.generos)
      .flat()
      .map((genero) => (
        <div>
          <p>{genero}</p>
          <br />
        </div>
      ));
  }

  return (
    <div>
      <h1>Filmes depois dos anos 2000</h1>
      {mapearFilmes(filtrarFilmesAnos())}
    </div>
  );
}

// function FilmeCard(props) {
//  const filme = props.filme;
//  const oscar = filme.oscar;
//  const nome = filme.nome;
//  return (
//    <div>
//      <h3>(oscar && <spam> - </spam>){nome}</h3>
//   </div>
//  );
//}

export default function App() {
  return <Filmes />;
  // return filmes2.map(filme2 => <FilmeCard filme>
}
