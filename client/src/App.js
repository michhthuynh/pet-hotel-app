import './App.css';
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.post('http://localhost:4000/api/auth/login', {
          username: 'hello hahaha',
          password: 'fasdfjajdfsadfl'
        })
        console.log(res)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetch()
  }, [])

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
