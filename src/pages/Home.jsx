import React from 'react'
import logo from '../assets/img/logo.svg';
import consulta from '../assets/img/consulta.png';
import integral from '../assets/img/integral.svg';
import plan from '../assets/img/plan.png';
import icon from '../assets/img/icon.svg';
import ejercicio from '../assets/img/ejercicio.png';
import control1 from '../assets/img/control1.jpg';
import control2 from '../assets/img/control2.jpg';
import control3 from '../assets/img/control3.jpg';
import blogSubtitle from '../assets/img/BlogText.svg';
import ServiciosSubtitle from '../assets/img/ServiciosText.svg';
import './css/global.css';
import Carrusel from '../components/Carrusel';
const Home = () => {
    return (
        <div className="container  ">
            <div className=" center pt-5 mb-5">
                <img src={logo} alt="Logo" className="logoHome center" />

            </div>
            <Carrusel />

            <div className="mt-5 divider"> <img src={ServiciosSubtitle} alt="Logo" className="subtitle mt-1" /></div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6  lh-42 ">
                        <div className="card noBorder ">

                            <div className="card-body">
                                <h5 className="card-title text-center"> Programa integral de manejo de obesidad y sobrepeso</h5>
                                <p className="card-text text-justify  ">Nuestro programa te ayuda a tener un estilo de vida saludable previniendo y controlando enfermedades relacionadas con la obesidad como: diabetes, hipertensión, dislipidemia, etc. No solo te ayudará a prevenir y controlar si no te permitirá perder peso constantemente logrando un mejor estilo de vida. Acude a una de nuestras consultas presenciales donde te brindaremos una valoración de:</p>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-light" type="button"><img src={icon} width="30" height="24" className="d-inline-block align-text-top" /> Mas información <img src={icon} width="30" height="24" className="d-inline-block align-text-top" /></button>
                                </div>

                            </div>
                            <div className="card-footer text-muted noBorder">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><img src={icon} width="30" height="24" className="d-inline-block align-text-top" /> Medición de peso, cintura y cadera</li>
                                    <li className="list-group-item"><img src={icon} width="30" height="24" className="d-inline-block align-text-top" />% Masa muscular, de grasa y edad metabólica</li>
                                    <li className="list-group-item"><img src={icon} width="30" height="24" className="d-inline-block align-text-top" />Toma de presión arterial y glucosa</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card noBorder" >
                            <img src={integral} alt="Servicio integral" className="card-img-top" />

                        </div>
                    </div>

                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={consulta} alt="Logo" className="card-img-top imgCard center" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Consulta Médica</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-center">Consulta Médica</h6>
                                <p className="card-text text-justify">En nuestras consultas de Control de Peso nuestros médicos expertos te realizarán un diagnostico integral para mejorar tu estilo de vida.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={ejercicio} alt="Logo" className="card-img-top imgCard center" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Plan de Actividad Física</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-center">Consulta Médica</h6>
                                <p className="card-text text-justify">El ejercicio es una pieza clave en el programa integral para perder más peso pero también para no recuperarlo.<br />
                                    Sin importar que sea la primera vez que inicias un programa o ya tengas experiencia, nuestros especialistas te darán un plan con diferentes tipos de ejercicio que puedes realizar en la comodidad de tu casa.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={plan} alt="Logo" className="card-img-top imgCard center" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Plan de Alimentación</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-center">Plan de Alimentación</h6>
                                <p className="card-text text-justify">La dieta es un componente importante del éxito para el programa de control de peso.
                                    <br />
                                    El plan de alimentación te dará diferentes platillos para cada alimento del día así como tener opciones entre las cuales podrás elegir como reemplazo.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="mt-5 divider"> <img src={blogSubtitle} alt="Logo" className="subtitle mt-1" /></div>
            <div className="container mt-5">

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={control1} alt="Logo" className="card-img-top imgCard center circle" />
                            <div className="card-body">
                                <h5 className="card-title text-center titleH">Consumir azúcar es malo para tu salud</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-center">May 19, 2022 by <strong>Cochis Ramirez</strong></h6>
                                <p className="card-text text-justify">Actualmente estamos muy acostumbrados a consumir productos procesados sin revisar las tablas nutricionales, estos alimentos tienen altos contenidos de azúcar y consumir en exceso azúcar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={control2} alt="Logo" className="card-img-top imgCard center circle" />
                            <div className="card-body">
                                <h5 className="card-title text-center titleH">Plan de Alimentación</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-center">May 19, 2022 by <strong>Cochis Ramirez</strong></h6>
                                <p className="card-text text-justify">Todos sabemos lo fantástico que es hacer ejercicio para su salud.Pero, ¿Qué sucede cuando tu entrenamiento no da resultados que deseas?, ¿o no está.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={control3} alt="Logo" className="card-img-top imgCard center circle" />
                            <div className="card-body">
                                <h5 className="card-title text-center titleH">Plan de Actividad Física</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-center">May 19, 2022 by <strong>Cochis Ramirez</strong></h6>
                                <p className="card-text text-justify">Impulsar tu sistema inmunológico es uno de los principales beneficios de comer sano mediante una dieta equilibrada de acuerdo a las necesidades de tu cuerpo.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className="end"></div>

        </div>
    )
}

export default Home