import React from 'react'
import './css/footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="container-fluid foot">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>



                <ul className="nav col-md-6 justify-content-end">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? ' nav-link active' : 'nav-link'} aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page" to="/salud-digital">Salud digital</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page" to="/productos">Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page" to="/quienes-somos">Quienes somos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page" to="/contacto">Contacto</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page" to="/plataforma">Plataforma</NavLink>
                    </li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer