import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="toDoList">
        {toDo.map((toDo) => (
          <div className="toDo">
            <div className="content">
              <p>{toDo.text}</p>
              <p className="category">({toDo.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
