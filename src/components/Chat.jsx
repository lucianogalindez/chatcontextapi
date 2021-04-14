import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatProvider'
import Formulario from './Formulario'

const Chat = () => {

    const {mensajes} = useContext(ChatContext) 

    /* const mensajes = useContext(ChatContext.mensajes) */
    

    return (
        <div
            className='mt-3 px-2 scrollChat'
        >

            {
                mensajes.map((item, index) => (
                    <div className='d-flex justify-content-end mb-2'>
                        <span className='badge rounded-pill bg-primary p-2'>
                            {item.texto}
                        </span>
                    </div>
                ))

            }
            
{/* 

            <div className='d-flex justify-content-start mb-2'>
                <span className='badge rounded-pill bg-secondary p-2'>
                    hola soy alex
                </span>
            </div>

 */}            
 
        <Formulario/>
        </div>
    )
}

export default Chat
