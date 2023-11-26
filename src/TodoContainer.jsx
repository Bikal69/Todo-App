import React, { useEffect } from 'react'
import { Tooltip } from 'react-tooltip'

const TodoContainer = ({todoTitle,todoDescription,deleteTodos,id,time,toggleTodo,completed}) => {
  const taskCompleted=new Audio('./src/sounds/taskCompleted.mp3')
  const taskDeleted=new Audio('./src/sounds/taskDeleted.mp3')
  function completedSound(){
    taskCompleted.currentTime=0;
    if(!completed){
   taskCompleted.play()
   return
    }
    taskCompleted.pause()
  }
  function deletedSound(){
    taskDeleted.currentTime=0;
    taskDeleted.play();
  }

  return (
<div className={`max-w-sm ${completed?'bg-green-300':'bg-white-700'} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden `}>
    <div className="p-5 flex flex-col items-start ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  break-all capitalize">{todoTitle}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-all capitalize ">{todoDescription}</p>
        <h3 className="text-gray-400">Set At:{time}</h3>
        <div className="flex justify-around">
          <h2 className="my-2">Status: {completed?'Completed ✅':'Pending ❌'}</h2>
 
        </div>
    </div>
    <div className="flex justify-around">

   <input  data-tooltip-id='checkToolTip'data-tooltip-content={completed?'Unmark Todo':'Mark Complete'}data-tooltip-place="bottom" id="check"type="checkbox"  className="w-10 h-10 cursor-pointer focus:ring-0  focus:ring-transparent bg-grey-500  rounded-lg my-2 focus:border-black" checked={completed} onClick={()=>  completedSound()} onChange={(e)=>{
    toggleTodo(id,e.target.checked)

    }}/>
   
        <button   onClick={()=>{
          deleteTodos(id)
          deletedSound()
        }}data-tooltip-id='deleteToolTip'data-tooltip-content='Delete Todo'data-tooltip-place="bottom"className="">
        <svg className="fill-black-700 hover:fill-red-600 transition-all ease-in-out active:scale-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        Delete
        </button>
        </div>
        <Tooltip id='deleteToolTip'/>
        <Tooltip style={{backgroundColor:'green',
      color:'white'}}id='checkToolTip'/>
</div>
  )
}

export default TodoContainer