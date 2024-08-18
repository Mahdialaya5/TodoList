import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import TaskList from './compoenets/TaskList';
import TaskForm from './compoenets/TaskForm';
import './App.css'

function App() {
    

  return (
   <>
    <nav>
       <Link to={'/addtask'}   ><button>addtask</button></Link>
       <Link to={'/'}  ><button>Home</button></Link>
   </nav>
   <Routes>
     <Route path='/' element={<TaskList  />}  />
     <Route path='/addtask' element={<TaskForm    />}  />
   </Routes>

    
   </>
  )
}

export default App




