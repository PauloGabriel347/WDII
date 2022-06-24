const Personagens = () => {};
let Familia = "Redfield";

export default function App() {
  const personagens = [
    "Jill Valentine",
    "Claire Redfield",
    "Ada Wong",
    "Chris Redfield",
    "Leon S. Kennedy",
    "Albert Wesker"
  ];
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagens
          .filter((personagem) => personagem.includes(Familia))
          .map((personagem) => (
            <li>{personagem}</li>
          ))}
      </ul>
    </div>
  );
}