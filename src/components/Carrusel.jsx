import React from 'react'
import './css/navbar.css'
import { NavLink } from 'react-router-dom'
import back from '../assets/img/Back.svg';
import next from '../assets/img/Next.svg';
const Carrusel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner center">
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/250" className="d-block img-carrusel" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/251" className="d-block img-carrusel" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/252" className="d-block img-carrusel" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"><img src={back} alt="Logo" width="50px" /></span>

                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"><img src={next} alt="Logo" width="50px" /></span>

                </button>
            </div>
        </>

    )
}

export default Carrusel