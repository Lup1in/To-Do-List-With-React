import { useState } from "react"
import ToDo from "./Components/ToDo"
import ToDoForm from "./Components/ToDoForm"
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar Funcionalidade',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Jogar',
      category: 'Pessoal',
      isCompleted: true,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'estudos',
      isCompleted: false,
    },
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="to-do-list">
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </div>
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App
