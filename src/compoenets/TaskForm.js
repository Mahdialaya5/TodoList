import React, { useEffect, useRef, useState } from 'react'
import '../layout/TaskForm.css'
import { useNavigate } from 'react-router-dom'

function TaskForm() {

    const [tasks, settasks] = useState([])
    const naviagte=useNavigate()
   // useRef 
      const name=useRef('')
      const des=useRef('')
     
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        if (data) {
            settasks(data);
        }
  
      }, [])
      
   const handlesubmit=(e)=>{
   
    e.preventDefault()
    const newTask = {
      name: name.current.value,
      description: des.current.value,
      checked: false,
      id: tasks.length + 1
      }
     const addTask = [...tasks, newTask]
     localStorage.setItem('data', JSON.stringify(addTask))
      naviagte('/')
   }


  return (
    <form  onSubmit={handlesubmit} >
      <label>name:</label>
      <input ref={name}   />
      <label>description:</label>
      <input ref={des}    />
      <button type='submit'   >save</button>
    </form>
  )
}

export default TaskForm