import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.css'
import newgologo from '../../../img/newgologo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src={newgologo} alt="Logo da empresa" height="45px"  width="45px"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">Sobre nós</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/catalog">Catálogo</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/finan">Simulação de Financiamento</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login">Cadastre-se/Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactus">Entre em contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar