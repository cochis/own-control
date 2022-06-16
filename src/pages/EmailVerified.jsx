import React from 'react'

import firebaseApp from '../assets/data/credenciales'
import { getAuth, onAuthStateChanged, } from 'firebase/auth'

const auth = getAuth(firebaseApp);

const EmailVerified = () => {
    console.log('auth', auth)
    return (
        <div className="form-signin w-100 m-auto center">
            <h3>
                EmailVerified
            </h3>
        </div>
    )
}

export default EmailVerified