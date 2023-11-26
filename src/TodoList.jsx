
import TodoContainer from "./TodoContainer"
import { useState } from 'react';
const TodoList = ({setModal,todos,setTodos}) => {
  //delete todo
function deleteTodo(id){
  setTodos((prevTodos) =>{
 return prevTodos.map((todo) =>{
   if(todo.id === id) { 
  return{  ...todo, fadeanim:true }
  }else{
    return todo
  } 
    
  }
  )
}
);
setTimeout(() => {
  setTodos((currentTodo)=>{
    return currentTodo.filter((todo)=>todo.id!==id)
  })
}, 700);
}
//toggle todo
function toggleTodo(id,completed){
setTodos((todo)=>{
  return todo.map((currenttodo)=>{
    if(currenttodo.id===id){
return{...currenttodo,completed}

    }

    else{ return currenttodo}
  })
})
}
  return (
    //container div
<div className={` max-h-fit min-h-full max-w-11/12  overflow-hidden h-auto my-8 flex flex-wrap justify-around border-solid border-2 border-green-600 rounded-xl p-5 `}>
  {/* todos container that will be mapped and rendered */}
{todos.map((todo)=>{
  return(<div key={todo.id} className={`w-1/4 h-auto mx-3 my-3  ${todo.fadeanim?'fadeout':''}`}>
<TodoContainer  id={todo.id} todoTitle={todo.title}  todoDescription={todo.description} deleteTodos={deleteTodo} toggleTodo={toggleTodo} completed={todo.completed} time={todo.createdAt}/>
</div>
  )
}
)
}

<button onClick={()=>{
  setModal(true)

}}
className=" w-1/5 h-1/5 text-3xl font-bold flex flex-col justify-center items-center"><svg className=' shadow-sm shadow-blue-500 group transition-all  ease-in-out duration-300 hover:scale-110 my-3'width="70" height="70" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg"><path className="group-hover:fill-red-500"  d="M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z" fill="blue" /><path className="group-hover:fill-red-500"  fill-rule="evenodd" clip-rule="evenodd" d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z" fill="blue" /></svg>Add Todo</button>
</div>
  )
}

export default TodoList