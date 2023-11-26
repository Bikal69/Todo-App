import React, { useState } from 'react'
import  ReactDOM  from 'react-dom'
const AddTodoModal = ({addTodo,setModal}) => {
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
 function handleSubmit(e){
e.preventDefault();
if(title!==""&&description!==""){
addTodo((prevTodo)=>{
    return[
        ...prevTodo,
       { id:crypto.randomUUID(),title:title,
        description:description,fadeanim:false,
        completed:false,
        createdAt:new Date().toDateString()+" on "+new Date().toLocaleTimeString()
       }
    ]
})}
setModal(false)
setTitle("");
setDescription("");
 }

  return ReactDOM.createPortal (
    //parent container
    <div className={`backdrop-blur-sm fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all ease-in-out duration-500`}>
<form  className={`modal-anim backdrop-blur-sm w-1/2 min-h-fit h-3/5 p-5 rounded-xl modal-border flex flex-col  bg-slate-300 transition-all ease-in-out duration-1000 `} onSubmit={(e)=>handleSubmit(e)}>
    <label className='inline-block mb-2'>
<h2 className=' text-xl underline font-bold my-1 text-lg text-green-500'>Title:</h2>
<input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}placeholder='Enter the Title'className='w-full h-14 rounded-lg text-3xl' required/>
    </label>
    <label className=' inline-block'>
<h2 className='text-xl underline font-bold my-1 text-lg text-green-500'>Description:</h2>
<textarea value={description} onChange={(e)=>setDescription(e.target.value)} className=' resize-none w-full h-32 rounded-lg text-xl' placeholder='Enter the Description'required></textarea>
    </label>
    <button type="submit" className='bg-orange-400 w-48 h-20 text-2xl font-bold mt-20 shadow-xl shadow-black-300 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 active:bg-orange-500' >Add Todo</button>
</form>
 </div>,
 document.getElementById("portal")
  )
}

export default AddTodoModal