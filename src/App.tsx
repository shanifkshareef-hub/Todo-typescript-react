import React, { useState } from 'react';
import { Todo } from './Components/model'
import './App.css';
import InputField from './Components/InputField';


// type filteredTodo={
//   values:Todo[]
// }


const App: React.FC = () => {


  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  // interface Todo{
  //   todo:string;
  //   setTodo: React.Dispatch<React.SetStateAction<string>>
  // }

  const handleAdd = () => {

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }
  // console.log(todos)

  const handleDelete = (id: number) => {


    const values = todos.filter(todo => todo.id !== id)
    //  console.log(values)
    setTodos(values)
  }

  const handleDone = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
  setTodos( todos.filter(todo=>{
    if(todo.id===id){
      todo.isDone=e.target.checked
      
    }
      return todo
    
   }))

     
   console.log(todos)
  }
  




  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input value={todo} type="text" onChange={(e) => {
          setTodo(e.target.value)
        }} placeholder="🖊️ Add item..." />

        <i className="fas fa-plus" onClick={handleAdd}></i>

      </div>

      <InputField data={todos} handleDelete={handleDelete} handleDone={handleDone} />




    </div>
  );
}

export default App;
