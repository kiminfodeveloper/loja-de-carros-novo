import React from 'react'
import newgologo from '../../../img/newgologo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-custom">
            <div className="container footer-content">
                <div className="footer-brand">
                    <img src={newgologo} alt="NewGo Car" />
                    <span>NewGo<span className="highlight">Car</span></span>
                    <p className="footer-tagline">Acelere seus sonhos com a melhor taxa do mercado.</p>
                </div>
                
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/catalog">Catálogo</a></li>
                            <li><a href="/finan">Simulação</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h4>Suporte</h4>
                        <ul>
                            <li><a href="/contactus">Fale Conosco</a></li>
                            <li><a href="/about">Sobre Nós</a></li>
                            <li><a href="/login">Área do Cliente</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-social">
                    <h4>Siga-nos</h4>
                    <div className="social-icons">
                         <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                         <a href="https://whatsapp.com" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
                         <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                 <p>&copy; 2026 NewGo Car, Inc. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer