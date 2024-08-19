import React, {  useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import  '../layout/TaskItem.css'

function TaskItem({el}) {

  const [isChecked, setIsChecked] = useState(el.checked);
  const [edit, setedit] = useState(false)
  const [editDes, seteditDes] = useState(el.description)
 
  const handlecheck = () => {
      const data = JSON.parse(localStorage.getItem('data')) 
      const updatedData = data.map(task => task.id === el.id ? { ...task, checked: true } : task )
      setIsChecked(true)
      localStorage.setItem('data', JSON.stringify(updatedData))
  }
  const handleEdit=()=>{
    setedit(!edit)
  }
  const saveEdit=()=>{
    const data = JSON.parse(localStorage.getItem('data')) 
    const updatedData = data.map(task => task.id === el.id ? { ...task, description:editDes } : task )
    setedit(false)
    localStorage.setItem('data', JSON.stringify(updatedData))

  }
  const handleDelete=()=>{
     const confirmdelete=window.confirm('confirm  delete')
    if (confirmdelete)
    {
    const data = JSON.parse(localStorage.getItem('data')) 
    const deleteData = data.filter(task => task.id !== el.id )
    localStorage.setItem('data', JSON.stringify(deleteData))

  }}
  return (
    <div   className='task' >
       <div className='item'  >
       <h3>name:{el.name}</h3>
      <p>description:{editDes}</p>
       <input type='checkbox'  checked={isChecked}    onChange={handlecheck} />
   {isChecked ? <p  className='check' >completed</p>: null}
       </div> 
       <div className='icons' >
       <FaEdit   onClick={handleEdit} />
     {edit ? <><input  onChange={(e)=>seteditDes(e.target.value)} /> <button onClick={saveEdit}  >save</button>  </>: null}
       <MdDelete  onClick={handleDelete} />
       </div>
       
    </div>
  )
}

export default TaskItem

