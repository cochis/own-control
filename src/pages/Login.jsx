import React, { useState } from 'react'
import icon from '../assets/img/icon.svg';
import './css/global.css';
import out from '../assets/img/x.png';
import firebaseApp from '../assets/data/credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, sendEmailVerification } from 'firebase/auth'
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const Plataforma = () => {
    const [estaRegistrandose, setEstaRegistrandose] = useState(false);
    const [error, setError] = useState(null);

    async function submitHandler(e) {
        e.preventDefault();

        const email = e.target.email.value;
        // console.log('email', email)
        const password = e.target.password.value;
        // console.log('password', password)
        if (estaRegistrandose) {
            try {
                const usuario = await createUserWithEmailAndPassword(auth, email, password)
                // console.log('usuario', usuario)

            } catch (error) {
                setError(error.message);
                console.log('error', error.message)

            }

            // if (!usuario.emailVerified){}
        } else {
            try {

                const usuario = await signInWithEmailAndPassword(auth, email, password)
                // console.log('usuario', usuario.user.emailVerified)
            } catch (error) {
                setError(error.message);
                console.log('error', error.message)

            }
        }


    }
    return (
        <>
            {!error ? null :
                <div className="alert alert-danger h100" role="alert">
                    <div className="float-start">
                        <p>{error}</p>
                    </div>
                    <div className="float-end">
                        <img onClick={() => setError(null)} className="pointer" src={out} alt="Logo" width="20px" />
                    </div>
                </div>
            }

            <main className="form-signin   center">
                <form className="steps-form-login" onSubmit={submitHandler} id="form">

                    <div className="fields-container">
                        <img className="mb-4" src={icon} alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">
                            {estaRegistrandose ? "Registrate" : "Inicia sesión"}
                        </h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>

                        {/* <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Recuerdame
                            </label>
                        </div> */}
                        <button className="w-100 btn btn-lg btn-primary" type="submit">
                            {estaRegistrandose ? "Registrate" : "Inicia sesión"}
                        </button>
                    </div>


                </form>

                <hr />
                <button className="w-100 btn btn-lg btn-danger" type="submit" onClick={() => signInWithRedirect(auth, googleProvider)}>Google</button>

                <p className="mt-5 mb-3 text-muted pointer" onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
                    {estaRegistrandose ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes Cuenta? Registrate"}
                </p>

            </main>
            <div className="end"></div>
        </>
    )
}

export default Plataforma