import React, { useState } from 'react'
import './css/navbar.css'
import '../pages/css/global.css'

import { NavLink, Link, } from 'react-router-dom'
import logoName from '../assets/img/logoName.svg';
import icon from '../assets/img/icon.svg';
import user from '../assets/img/user.png';
import userLogin from '../assets/img/userLogin.jpg';
import firebaseApp from '../assets/data/credenciales'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
// import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const auth = getAuth(firebaseApp);
    const [usuarioGlobal, setUsuarioGlobal] = useState(null);
    const firestore = getFirestore(firebaseApp);
    // const navigate = useNavigate()
    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            //console.log('usuarioFirebase navbar', usuarioFirebase)
            setUsuarioGlobal(usuarioFirebase)
        } else {
            setUsuarioGlobal(null)
        }
    })
    React.useEffect(() => {
        const getData = async () => {
            try {
                // const db = firebase.firestore()
                // const data = await db.collection('users').get()
                // console.log('data', data)

            } catch (error) {
                console.log('error', error)

            }
        }
        getData()
    }, [])
    async function editarPerfil(event) {
        console.log('event', event)
        console.log('usuarioGlobal', usuarioGlobal.uid)
        const docRef = doc(firestore, `users/${usuarioGlobal.uid}`)
        const consulta = await getDoc(docRef)
        const dataC = consulta.data();
        console.log('dataC', dataC)
        var data = dataC
        console.log('data', data)
        data.perfilData = data
        console.log('data.perfil', data.perfilData)
        var perfilData = {

            displayName: data.displayName ? data.displayName : "",
            email: data.email ? data.email : "",
            emailVerified: data.emailVerified ? data.emailVerified : false,
            photoURL: data.photoURL ? data.photoURL : "",
            role: data.role ? data.role : "",
            uid: data.uid ? data.uid : "",
            perfil: {
                historialMedico: {

                    fichaIdentificacion: {
                        nombrePaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.nombrePaciente,

                        edadPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.edadPaciente,
                        fechaNacimientoPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.fechaNacimientoPaciente,
                        sexoPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.sexoPaciente,
                        razaPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.razaPaciente,
                        estadoCivilPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.estadoCivilPaciente,
                        domicilioActualPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.domicilioActualPaciente,
                        telefonoPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.telefonoPaciente,
                        religionPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.religionPaciente,
                        ocupacionPaciente: data.perfilData.perfil.historialMedico.fichaIdentificacion.ocupacionPaciente
                    },
                    antecedentesPatologicos: {
                        enfermedadesPaciente: data.perfilData.perfil.historialMedico.antecedentesPatologicos.enfermedadesPaciente,
                        hospitalizacionesPaciente: data.perfilData.perfil.historialMedico.antecedentesPatologicos.hospitalizacionesPaciente,
                        cirugiasPaciente: data.perfilData.perfil.historialMedico.antecedentesPatologicos.cirugiasPaciente,
                        traumatismosHeridasPaciente: data.perfilData.perfil.historialMedico.antecedentesPatologicos.traumatismosHeridasPaciente,
                        inmunizacionesVacunasPaciente: data.perfilData.perfil.historialMedico.antecedentesPatologicos.inmunizacionesVacunasPaciente,
                        viajesPaciente: data.perfilData.perfil.historialMedico.antecedentesPatologicos.viajesPaciente,
                        historiaPsiquiatricaPaciente: data.perfilData.perfil.historialMedico.antecedentesPatologicos.historiaPsiquiatricaPaciente
                    },
                    antecedentesNoPatologicos: {
                        tabaquismoCheckPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.tabaquismoCheckPaciente,
                        cigarrosAlDiaPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.cigarrosAlDiaPaciente,
                        fechaEmpezoFumarPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.fechaEmpezoFumarPaciente,
                        alcoholismoCheckPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.alcoholismoCheckPaciente,
                        tipoBebidasPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.tipoBebidasPaciente,
                        fechaEmpezoTomarPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.fechaEmpezoTomarPaciente,
                        frecuenciaTomaPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.frecuenciaTomaPaciente,
                        cantidadAlcoholPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.cantidadAlcoholPaciente,
                        drogadiccionCheckPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.drogadiccionCheckPaciente,
                        tipoDrogasPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.tipoDrogasPaciente,
                        fechaEmpezoDrogarPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.fechaEmpezoDrogarPaciente,
                        frecuenciaDrogaPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.frecuenciaDrogaPaciente,
                        cantidadDrogasPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.cantidadDrogasPaciente,
                        drogasIlegalesCheckPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.drogasIlegalesCheckPaciente,
                        tipoDrogasIlegalesPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.tipoDrogasIlegalesPaciente,
                        fechaEmpezoDrogarIlegalesPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.fechaEmpezoDrogarIlegalesPaciente,
                        frecuenciaDrogaIlegalesPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.frecuenciaDrogaIlegalesPaciente,
                        cantidadDrogasIlegalesPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.cantidadDrogasIlegalesPaciente,
                        estiloVidaPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.estiloVidaPaciente,
                        higienePersonalPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.higienePersonalPaciente,
                        dietaPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.dietaPaciente,
                        ejercicioPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.ejercicioPaciente,
                        educacionPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.educacionPaciente,
                        trabajoPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.trabajoPaciente,
                        historiaMilitarPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.historiaMilitarPaciente,
                        actividadesPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.actividadesPaciente,
                        satisfaccionFrustacionPaciente: data.perfilData.perfil.historialMedico.antecedentesNoPatologicos.satisfaccionFrustacionPaciente

                    },
                    antecedentesGinecoObs: {
                        menstruacionPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.menstruacionPaciente,
                        fechaMenstruacionUltimaPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.fechaMenstruacionUltimaPaciente,
                        fechaMenarcaPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.fechaMenarcaPaciente,
                        embarazoCheckPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.embarazoCheckPaciente,
                        partosPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.partosPaciente,
                        cesariasPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.cesariasPaciente,
                        abortosPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.abortosPaciente,
                        macrosomiaPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.macrosomiaPaciente,
                        contracepcionPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.contracepcionPaciente,
                        papanicolaoPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.papanicolaoPaciente,
                        vidaSexualActivaPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.vidaSexualActivaPaciente,
                        menopausiaPaciente: data.perfilData.perfil.historialMedico.antecedentesGinecoObs.menopausiaPaciente,
                    }
                }
                ,
                complete: false
            }
        }
        // data.perfil.complete = false;

        console.log('perfilData', perfilData)
        await setDoc(docRef, {
            perfilData
        })
        window.location.reload();


    }
    function getOut() {
        console.log('salir');

        signOut(auth)
        // history.push('/')
        // navigate("/", { replace: true });
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid ms-5">

                    <Link className="navbar-brand" to="/">
                        <img src={icon} width="30" height="24" className="d-inline-block align-text-top" />
                    </Link>


                    <Link className="navbar-brand" to="/"> <img src={logoName} width="150" className="d-inline-block align-text-top" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" center collapse navbar-collapse text-center " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? ' nav-link activeLink' : 'nav-link'} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link activeLink' : 'nav-link'} aria-current="page" to="/salud-digital">Salud digital</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link activeLink' : 'nav-link'} aria-current="page" to="/productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link activeLink' : 'nav-link'} aria-current="page" to="/quienes-somos">Quienes somos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link activeLink' : 'nav-link'} aria-current="page" to="/contacto">Contacto</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link activeLink' : 'nav-link'} aria-current="page" to="/plataforma">Plataforma</NavLink>
                            </li>

                        </ul>

                    </div>
                    <div className=" float-end margin-y ">
                        {!usuarioGlobal ? null :
                            <div className="dropdown">
                                <div className="  dropdown-toggle me-5" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {!usuarioGlobal.photoURL ? <img src={userLogin} width="30" height="30" className="d-inline-block align-text-top" /> :
                                        <img src={usuarioGlobal.photoURL} width="30" height="30" className="d-inline-block align-text-top" />}
                                </div>
                                <ul className="dropdown-menu ms-5 mrm" aria-labelledby="dropdownMenuButton1">
                                    <li className="center">    {!usuarioGlobal ?

                                        <img src={user} width="30" height="30" className="d-inline-block align-text-top" /> :
                                        <>
                                            {!usuarioGlobal.photoURL ? <img src={userLogin} width="30" height="30" className="d-inline-block align-text-top" /> :
                                                <img src={usuarioGlobal.photoURL} width="30" height="30" className="d-inline-block align-text-top" />}

                                            {usuarioGlobal.email}
                                        </>
                                    }</li>
                                    <li className="center"> Another action</li>
                                    <li className="center pointer" onClick={editarPerfil}>Editar Perfil</li>
                                    <li onClick={getOut} className="center pointer">Salir</li>
                                </ul>
                            </div>
                        }


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar