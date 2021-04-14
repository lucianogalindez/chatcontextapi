import React, { useEffect, useState } from 'react'
import { auth, db, provider } from '../firebase'

export const ChatContext = React.createContext() //se crea el contexto que va a envolver a tu app

const ChatProvider = (props) => {

    const dataUsuario = {
        uid: null,
        email: null,
        displayName: null,
        estado: null
    }

    const [user, setUser] = useState(dataUsuario)
    const [mensajes, setMensajes] = useState([])

    useEffect(() => {

        const detectarUsuario = () => {

            auth.onAuthStateChanged(usuario => {
                if(usuario) {
                    setUser({
                        uid: usuario.uid,
                        email: usuario.email,
                        displayName: usuario.displayName,
                        estado: true
                    })
                    cargarMensajes()
                }else{
                    setUser({
                        uid: null,
                        email: null,
                        displayName: null,
                        estado: false
                    })
                }
            })

        }

        detectarUsuario()

    }, [])

    const ingresar = async () => {
        //metodo try catch
        try {

            const res = await auth.signInWithPopup(provider)

            //console.log(res)

            setUser({
                uid: res.user.uid,
                email: res.user.email,
                displayName: res.user.displayName,
                estado: true
            })

        }catch(error){
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    //cargar mensajes
    const cargarMensajes = async () => {
        await db
            .collection('chat')
            .onSnapshot((query) => {
                const arrayMensajes = query.docs.map(item => {
                    return item.data()
                })

                setMensajes(arrayMensajes)
            })
    }

    //Fijo 
    return (
        <ChatContext.Provider value={{user, ingresar, cerrarSesion, mensajes}}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
