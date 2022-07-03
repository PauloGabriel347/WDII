import React from 'react';
import './styles.css';

export default function App() {
  const [tarefas, setTarefas] = React.useState(['conteudo']);
  const [inputTarefa, setInputTarefa] = React.useState('');
  const handOnSubmit = (e) => e.preventDefault();
  const handleOnClickAdicionar = () => {
    const novoArray = tarefas;
    novoArray.push(inputTarefa);
    setTarefas([...novoArray]);
    setInputTarefa('');
  };

  return (
    <div className="container">
      <div className="conteudo">
        <h1 className="titulo">Tarefas</h1>
        <div>
          <form onSubmit={handOnSubmit}>
            <div className="tarefa_box">
              <label htmlFor="tarefa">Tarefa</label>
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                }}
              >
                <input
                  id="tarefa"
                  name="tarefa"
                  value={inputTarefa}
                  onChange={(e) => setInputTarefa(e.target.value)}
                  placeholder="minha tarefa"
                />
                <button
                  className="btn btn_adicionar"
                  onClick={handleOnClickAdicionar}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </form>
          <section>
            <ul>
              {tarefas.map((tarefa) => (
                <li>
                  <input className="tarefa_conteudo" disabled value={tarefa} />
                  <button className="btn btn_excluir">Excluir</button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
