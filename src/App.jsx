import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const base_url = process.env.REACT_APP_SERVER_BASE_URL;
   axios.get(`${base_url}/`).then(res=>{setCount(res.data)}).catch(err => alert(`Some error occured ==>${err}`));
  return (
    <>
      <p>{count}</p>
    </>
  )
}

export default App
