import React, { useState, useEffect } from 'react'
import icon from '../assets/img/icon.svg';
import './css/global.css';

import firebaseApp from '../assets/data/credenciales'
import { getAuth, onAuthStateChanged, } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import Login from './Login';
import Perfil from './Perfil';
import EmailVerified from './EmailVerified';

const Plataforma = () => {
    const auth = getAuth(firebaseApp);
    const [usuarioGlobal, setUsuarioGlobal] = useState(null);
    const [perfilComplete, setPerfilComplete] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const firestore = getFirestore(firebaseApp);
    async function buscarUsuario(idUsuario) {
        console.log('idUsuario', idUsuario)
        const docRef = doc(firestore, `users/${idUsuario}`)

        const consulta = await getDoc(docRef)

        if (consulta.exists()) {
            const data = consulta.data();
            console.log('data', data)
            return data;
        }

    }
    onAuthStateChanged(auth, (usuarioFirebase) => {
        console.log('usuarioFirebase', usuarioFirebase)
        if (usuarioFirebase) {
            setUsuarioGlobal(usuarioFirebase)

            async function fetchPerfil() {
                console.log('uid perfil', usuarioFirebase.uid)
                const infoPerfil = await buscarUsuario(usuarioFirebase.uid);
                console.log('infoPerfilnew', infoPerfil)
                if (!infoPerfil.perfil) {

                    setPerfilComplete(infoPerfil.perfilData.perfil.complete)
                } else {
                    setPerfilComplete(infoPerfil.perfil.complete)

                }



            }
            fetchPerfil()
        } else {
            setUsuarioGlobal(null)
        }
    })
    return (
        <>
            {usuarioGlobal ?

                <Perfil usuario={usuarioGlobal} />
                : <Login />}


        </>
    )
}

export default Plataforma