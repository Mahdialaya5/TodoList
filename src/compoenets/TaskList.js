import React from 'react'
import TaskItem from './TaskItem'
import '../layout/TaskList.css'

function TaskList() {

 const data= JSON.parse(localStorage.getItem('data'))
  
  return (
    <div className='tasks'>
       { data&&data.map((el)=> <TaskItem  el={el}  key={el.id} /> )} 
        
        </div>
  )
}

export default TaskList