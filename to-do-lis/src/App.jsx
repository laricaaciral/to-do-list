import { useState } from "react";
import ToDo from "./components/toDo";
import ToDoForm from "./components/toDoForm";
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

  const addToDos = (text, category) => {
    const newToDos = [
      ...toDo,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setToDo(newToDos);
  };

  const removeToDo = (id) => {
    const newToDos = [...toDo];
    const filteredToDos = newToDos.filter((toDo) =>
      toDo.id !== id ? toDo : null
    );
    setToDo(filteredToDos);
  };

  const completeToDo = (id) => {
    const newToDos = [...toDo];
    newToDos.map((toDo) =>
      toDo.id === id ? (toDo.isCompleted = !toDo.isCompleted) : toDo
    );
    setToDo(newToDos);
  };

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="toDoList">
        {toDo.map((toDo) => (
          <ToDo
            key={toDo.id}
            toDo={toDo}
            completeToDo={completeToDo}
            removeToDo={removeToDo}
          />
        ))}
      </div>
      <ToDoForm addToDos={addToDos} />
    </div>
  );
}

export default App;
