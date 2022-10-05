import React from 'react'
import './Home.css'
import './About.css'

const About = () => {
    return (
        <div className='container-fluid bg-dark'>
            <h1 className='light'>Sobre a <span>NewGo Car</span></h1>
            <div className='container other-color'>
                <h3 className='light'>Nosso DNA</h3>
                <p className="light">Há mais de 20 anos na estrada, fomos a primeira startup brasileira a inovar na forma de comprar e vender carros e motos. Líderes de mercado e especialistas no segmento, temos como combustível a paixão pela cultura automotiva e a vontade de oferecer sempre a melhor e mais segura experiência de compra e venda online ;)</p>
                <h3 className='light'>Nossa missão</h3>
                <p className='light'>Conectar pessoas às melhores condições e informações, e criar meios para que façam a melhor escolha na hora de comprar, vender e usar um veículo.</p>
                <h3 className='light'>Entre em contato</h3>
                <h3 className='light space'>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                </h3>
            </div>
            <div>
                vago
            </div>
        </div>
    )
}

export default About