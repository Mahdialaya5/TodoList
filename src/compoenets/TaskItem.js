import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import  '../layout/TaskItem.css'

function TaskItem({el}) {

  const [isChecked, setIsChecked] = useState(el.checked);

  const handlecheck = () => {
      const data = JSON.parse(localStorage.getItem('data')) 
      const updatedData = data.map(task => task.id === el.id ? { ...task, checked: true } : task )
      setIsChecked(true)
      localStorage.setItem('data', JSON.stringify(updatedData))
  };
  return (
    <div   className='task' >
       <div className='item'  >
       <h3>name:{el.name}</h3>
      <p>description:{el.description}</p>
       <input type='checkbox'  checked={isChecked}   onClick={handlecheck}/>
   {isChecked ? <p  className='check' >completed</p>: null}
       </div> 
       <div className='icons' >
       <FaEdit />
       <MdDelete />
       </div>
       
    </div>
  )
}

export default TaskItem

