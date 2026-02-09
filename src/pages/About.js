import React, { useEffect } from 'react'
import './About.css'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <div className="container">
                <div className="about-header">
                    <h1>Sobre a <span className="text-gradient">NewGo Car</span></h1>
                    <p className="subtitle">Redefinindo a experiência de possuir um carro esportivo.</p>
                </div>

                <div className="about-grid">
                    <div className="about-card card-glass">
                        <div className="icon-wrapper">
                            <i className="bi bi-speedometer2"></i>
                        </div>
                        <h3>Nosso DNA</h3>
                        <p>
                            Há mais de 20 anos na estrada, fomos a primeira startup brasileira a inovar na 
                            forma de comprar e vender carros e motos. Líderes de mercado e especialistas 
                            no segmento, temos como combustível a paixão pela cultura automotiva e a 
                            vontade de oferecer sempre a melhor e mais segura experiência.
                        </p>
                    </div>

                    <div className="about-card card-glass">
                        <div className="icon-wrapper">
                            <i className="bi bi-bullseye"></i>
                        </div>
                        <h3>Nossa Missão</h3>
                        <p>
                            Conectar pessoas às melhores condições e informações, e criar meios para que 
                            façam a melhor escolha na hora de comprar, vender e usar um veículo. 
                            Nós não vendemos apenas carros, vendemos sonhos e liberdade.
                        </p>
                    </div>

                    <div className="about-card card-glass highlight-card">
                        <h3>Junte-se a nós</h3>
                        <p>
                            Siga-nos nas redes sociais e fique por dentro das últimas novidades do mundo automotivo.
                        </p>
                        <div className="social-links-large">
                            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social-btn"><i className="bi bi-whatsapp"></i></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn"><i className="bi bi-facebook"></i></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About