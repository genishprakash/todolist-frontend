import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import AddTask from './components/AddTask'
import Today from './components/Today'
import Upcoming from './components/Upcoming'
import {Routes, Route } from 'react-router-dom';
import Inbox from './components/Inbox'
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import Project from './components/Project'
import { setBaseUrl } from './store/baseUrlSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_REACT_APP_NODE_ENV === 'development'
      ? import.meta.env.VITE_REACT_APP_LOCAL_BASE_URL
      : import.meta.env.VITE_REACT_APP_SERVER_BASE_URL;
    
    dispatch(setBaseUrl(baseUrl));
  }, [dispatch]);



  const [addTaskIsShown, setaddTaskIsShown] = useState(false);

  const [addProjectIsShown, setaddProjectIsShown] = useState(false);
  const showAddTask = () => {
    setaddTaskIsShown(true)
  }

  const hideAddTask = () => {
    setaddTaskIsShown(false)
  }
  const showAddProject = () => {
    setaddProjectIsShown(true)
  }

  const hideAddProject = () => {
    setaddProjectIsShown(false)
  }


  return (
    <div className='main'>
      {addTaskIsShown && <AddTask onClose={hideAddTask}></AddTask>}
      {addProjectIsShown && <AddProject onClose={hideAddProject}></AddProject>}
      <SideBar showAddTask={showAddTask} showAddProject={showAddProject}></SideBar>

      <Routes>
        <Route path="/"  />
        <Route path="/today" element={Today} />
        <Route path="/Inbox" element={Inbox} />
        <Route path="/Upcoming" element={Upcoming} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Project />} />

      </Routes>


    </div>
  )
}

export default App
