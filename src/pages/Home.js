import React from 'react'
import './Home.css'

// img
import audia3 from '../img/audia3.webp'
import golfgti from '../img/golfgti.jpg'
import lancerevo from '../img/lancerevo.jpg'
import skyline from '../img/skyline.jpg'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="container-fluid bg-dark">
            <h1 className="light">Bem vindo a <span>NewGo Car</span></h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={audia3} className="d-block w-100" alt="Audi A3" />
                    </div>
                    <div className="carousel-item">
                        <img src={golfgti} className="d-block w-100" alt="Golf GTI" />
                    </div>
                    <div className="carousel-item">
                        <img src={lancerevo} className="d-block w-100" alt="Lancer Evolution" />
                    </div>
                    <div className="carousel-item">
                        <img src={skyline} className="d-block w-100" alt="Lancer Evolution" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h3 className='light'>Aqui você encontrará o melhor carro esportivo da atualidade!</h3>
            <div className='container adjust'>
                <p className='light'>Verifique a disponibilidade dos veiculos aqui <i className="bi bi-arrow-right"> </i> 
                <button className='btn btn-light'><Link to="/catalog">Clique aqui</Link></button>
                </p>
            </div>
        </div>
    )
}

export default Home