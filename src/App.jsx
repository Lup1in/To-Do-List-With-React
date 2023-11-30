import { useState } from "react"
import ToDo from "./Components/ToDo"
import ToDoForm from "./Components/ToDoForm"
import './App.css'
import Search from "./Components/Search"

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

  const [search, setSearch] = useState("");


  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  };



  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="to-do-list">
        {todos.filter((todo => todo.text.toLowerCase().includes(search.toLowerCase())))
          .map((todo) => (
            <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App
