import React, { useState } from 'react'

const Formulario = () => {

    const [mensaje, setMensaje] = useState('')

    const agregar = (e) => {
        e.preventDefault()

        if(!mensaje.trim()){
            console.log('el mensaje no es valido')
            return false
        }

        
    }

    return (
        <form className='fixed-bottom input-group p-3 bg-dark' onSubmit={(e) => agregar(e)}>
            
            <input
                type='text'
                className='form-control'
            />

            <div className='input-group-append'>
                <button
                    className='btn btn-primary'
                    type='submit'
                    onChange={e => setMensaje(e.target.value)}
                    value={mensaje}
                >
                    Enviar
                </button>
            </div>

        </form>
    )
}

export default Formulario
