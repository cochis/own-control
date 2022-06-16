import React from 'react'
import ContactoTitle from '../assets/img/ContactoTitle.svg';

import prevencion from '../assets/img/prevencion.jpg';
import atencion from '../assets/img/atencion.jpg';
import seguimiento from '../assets/img/seguimiento.jpg';
const Contacto = () => {
    return (
        <div className="container  ">
            <div className=" center pt-5 mb-5">
                <img src={ContactoTitle} alt="Logo" className="logoHome center" />

            </div>
            <div className="    mt-5">
                <h2 className="center"> ¿Que es salud digital?</h2>

                <p className="mt-5 card-text  text-justify">
                    El desarrollo de la medicina se ha emparejado con el avance de la tecnología, lo que permite ofrecer mejores servicios gracias a políticas públicas que impulsan a las instituciones a seguir su camino hacia intervenciones integrales en favor de la salud.
                </p>

            </div>
            <div className="container mt-5">

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={prevencion} alt="Logo" className="card-img-top imgCard center circle" />
                            <div className="card-body">
                                <h5 className="card-title text-center titleH">Prevención proactiva con detección de riesgos</h5>

                                <p className="card-text text-justify"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.del T.persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={atencion} alt="Logo" className="card-img-top imgCard center circle" />
                            <div className="card-body">
                                <h5 className="card-title text-center titleH">Atención efectiva y con calidad</h5>

                                <p className="card-text text-justify">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card noBorder"  >
                            <img src={seguimiento} alt="Logo" className="card-img-top imgCard center circle" />
                            <div className="card-body">
                                <h5 className="card-title text-center titleH">Seguimiento personalizado</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-center">May 19, 2022 by <strong>Cochis Ramirez</strong></h6>
                                <p className="card-text text-justify">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>





        </div>
    )
}

export default Contacto