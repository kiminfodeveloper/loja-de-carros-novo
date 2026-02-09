import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import newgologo from '../../../img/newgologo.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-brand">
                    <img src={newgologo} alt="NewGo Car" />
                    <span>NewGo<span className="highlight">Car</span></span>
                </Link>
                
                <div className="navbar-links">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Sobre nós</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/catalog" className="nav-link">Catálogo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/finan" className="nav-link highlight-link">Simular Financiamento</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link">Contato</Link>
                        </li>
                         <li className="nav-item">
                            <Link to="/login" className="btn-neon-sm">Login</Link>
                        </li>
                    </ul>
                </div>
                
                {/* Mobile Menu Toggle (Simplified) */}
                <div className="mobile-menu-icon" onClick={() => document.querySelector('.navbar-links').classList.toggle('active')}>
                    <i className="bi bi-list"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar