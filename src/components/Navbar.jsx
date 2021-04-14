import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatProvider'

const Navbar = () => {

    const {user, ingresar, cerrarSesion} = useContext(ChatContext)

    console.log('hola', user)

    return (
        <nav className='navbar navbar-dark bg-dark px-3'>

            <span className='navbar-brand'>
                Chat
            </span>

            <div>

                {
                    !user.estado ?
                    (
                        <button
                            className='btn btn-outline-success my-2 ms-2'
                            onClick={() => ingresar()}
                        >
                            Acceder
                        </button>
                    ) : (
                        <button
                            className='btn btn-outline-danger my-2 ms-2'
                            onClick={() => cerrarSesion()}
                        >
                            Salir
                        </button>
                    )
                }

                
            </div>
            
        </nav>
    )
}

export default Navbar
