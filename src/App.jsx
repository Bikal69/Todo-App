import { Link, Outlet} from "react-router-dom";
import { useState,useEffect } from "react";
import Search from "./Search";
import './App.css';
import TodoList from "./TodoList";
import AddTodoModal from "./AddTodoModal";

const App = () => {
  const [modal,setModal]=useState(false);
  const [fadeout,setFade]=useState(false);
  const [todos,setTodo]=useState(()=>{
    const localValue=localStorage.getItem("items")
    if(localValue==null)return []
    return JSON.parse(localValue)
  })
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(todos))
  },[todos])
  //sound Effect
  
  return (
  <>
    <div className="w-screen h-screen flex  flex-col items-center ">

    <Search/>
    <div className=" w-4/5 h-3/5">
<TodoList setModal={setModal} todos={todos} setTodos={setTodo} fadeout={fadeout} setFade={setFade}/>
{modal && <AddTodoModal todo={todos}modal={modal} setModal={setModal} addTodo={setTodo} fadeout={fadeout} setFade={setFade}/>}
    </div>
    </div>
    </>
  );
};

export default App;