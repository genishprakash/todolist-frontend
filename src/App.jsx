import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [count, setCount] = useState(0)

  const base_url = import.meta.VITE_REACT_APP_NODE_ENV === 'development' ? import.meta.VITE_REACT_APP_LOCAL_BASE_URL : import.meta.VITE_REACT_APP_SERVER_BASE_URL;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/`); 
        const { value } = response.data;
        
        setCount(value);
        
      } catch (error) {
        console.log(`Some error occurred: ${error.message}`);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <p style={{fontSize:"2rem", color:"red"}}>{count}</p>
    </>
  )
}

export default App
