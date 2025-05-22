import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ContactList from './components/ContactList';
import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() =>{
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=20').then((response) =>{
      if(!response.ok){
        setIsLoading(false);
        setError('Error while loading Users')
      }
      return response.json()
    }).then((data)=>{
      console.log('data',data);
      setContacts(data.results);
      setIsLoading(false);
    }).catch((err)=>{
      setError('API Error while loading users');
      setIsLoading(false);
    })
  },[]);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
      {isLoading ? 
        <div>
          Loading.....
        </div> : null
      }
      {error ? 
        <div className='error'>
          {error}
        </div> : null
      }
      {
        !isLoading && <ContactList contacts={contacts} />
      }
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
