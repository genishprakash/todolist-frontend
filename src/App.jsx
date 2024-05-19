import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import SideBar from './components/SideBar'
import Content from './components/Content'
import AddTask from './components/AddTask'
function App() {

  const [count, setCount] = useState(0)
  const base_url = import.meta.env.VITE_REACT_APP_NODE_ENV === 'development' ? import.meta.env.VITE_REACT_APP_LOCAL_BASE_URL : import.meta.env.VITE_REACT_APP_SERVER_BASE_URL;
  console.log(base_url)

  
  
  const [addTaskIsShown,setaddTaskIsShown]=useState(true);

  const showAddTask=()=>{
      setaddTaskIsShown(true)
  }

  const hideAddTask=()=>{
      setaddTaskIsShown(false)
  }
  
  return (
    <div className='main'>
      {addTaskIsShown && <AddTask onClose={hideAddTask}></AddTask>}
      <SideBar showAddTask={showAddTask}></SideBar>
      <Content></Content>
    </div>
  )
}

export default App
