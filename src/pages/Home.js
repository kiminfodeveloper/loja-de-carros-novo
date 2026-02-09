import React, { useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

// img
import audia3 from '../img/audia3.webp'
import laferrari from '../img/laferrari.jpg'
import jesko from '../img/jesko.jpg'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <span className="hero-badge">Novidades 2026</span>
                    <h1 className="hero-title">
                        A excelência em <br />
                        <span className="text-gradient">Carros Esportivos</span>
                    </h1>
                    <p className="hero-description">
                        Descubra a combinação perfeita de performance, design e luxo. 
                        Sua jornada para a velocidade começa aqui.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/catalog" className="btn-neon">Ver Catálogo</Link>
                        <Link to="/finan" className="btn-outline-neon">Simular Financiamento</Link>
                    </div>
                </div>
            </section>

            {/* Featured Section (formerly Carousel equivalent) */}
            <section className="featured-section container">
                <div className="section-header">
                    <h2>Destaques da Semana</h2>
                    <p>As máquinas mais desejadas do momento.</p>
                </div>
                
                <div className="featured-grid">
                    <div className="featured-card">
                        <img src={audia3} alt="Audi A3" />
                        <div className="card-content">
                            <h3>Audi A3 2022</h3>
                            <p>Tecnologia e conforto.</p>
                        </div>
                    </div>
                    <div className="featured-card">
                        <img src={laferrari} alt="LaFerrari" />
                        <div className="card-content">
                            <h3>LaFerrari</h3>
                            <p>Ícone de velocidade.</p>
                        </div>
                    </div>
                    <div className="featured-card">
                        <img src={jesko} alt="Jesko" />
                        <div className="card-content">
                            <h3>Koenigsegg Jesko</h3>
                            <p>O hipercarro definitivo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card card-glass">
                        <div className="cta-content">
                            <h2>Pronto para acelerar?</h2>
                            <p>Não perca tempo sonhando. Faça uma simulação e veja como é fácil ter o carro dos seus sonhos.</p>
                            <Link to="/finan" className="btn-neon">Fazer Simulação Agora <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home