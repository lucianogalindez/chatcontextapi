import { useContext } from 'react';
import './App.css';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import { ChatContext } from './context/ChatProvider';

function App() {

  const {user} = useContext(ChatContext)

  console.log(user)

  return user.estado !== null ? (
    <div className="App">
      <Navbar/>

      {
        user.estado ? (
          <Chat/>
        ) : (
          <div className='lead text-center mt-5'>
            Debes iniciar sesion
          </div>
        )
      }      

      
    </div>
  ) : (
    <div className='text-center py-5'>Cargando...</div>
  )
  
}

export default App;
