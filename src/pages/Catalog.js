import React, { useEffect } from 'react'
import './Catalog.css'
import { Link } from 'react-router-dom'

// img
import audia3 from '../img/audia3.webp'
import golfgti from '../img/golfgti.jpg'
import lancerevo from '../img/lancerevo.jpg'
import skyline from '../img/skyline.jpg'
import subarusti from '../img/subarusti.webp'
import laferrari from '../img/laferrari.jpg'
import aventador from '../img/aventador.jpg'
import jesko from '../img/jesko.jpg'

const carsData = [
    { title: 'Audi A3 2022', img: audia3, price: 220000, desc: 'Uma máquina que combina potência e elegância ao mesmo tempo.', id: 0 },
    { title: 'Lancer Evolution', img: lancerevo, price: 280000, desc: 'Motor boxer, tecnologia Mitsubishi de ponta.', id: 1 },
    { title: 'Golf GTI 2022', img: golfgti, price: 180000, desc: 'O hatch esportivo mais amado do mundo.', id: 2 },
    { title: 'Skyline GTR', img: skyline, price: 320000, desc: 'A lenda das pistas e do cinema.', id: 3 },
    { title: 'Subaru WRX STI', img: subarusti, price: 200000, desc: 'Nascido nos ralis, pronto para a rua.', id: 4 },
    { title: 'Koenigsegg Jesko', img: jesko, price: 2800000, desc: 'O auge da engenharia automotiva.', id: 5 },
    { title: 'Lamborghini Aventador', img: aventador, price: 1800000, desc: 'Design agressivo e motor V12 aspirado.', id: 6 },
    { title: 'LaFerrari', img: laferrari, price: 2500000, desc: 'A obra-prima híbrida de Maranello.', id: 7 },
];

const Catalog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

    return (
        <div className="catalog-page">
            <div className="catalog-header">
                <div className="container">
                    <h1>Nosso <span className="text-gradient">Catálogo</span></h1>
                    <p>Explore nossa coleção exclusiva de veículos de alta performance.</p>
                </div>
            </div>

            <div className="container catalog-grid-container">
                {carsData.map((car) => (
                    <div key={car.id} className="car-card card-glass">
                        <div className="car-image-wrapper">
                            <img src={car.img} alt={car.title} />
                            <div className="car-overlay">
                                <Link to={`/detail/${car.id}`} className="btn-view">Ver Detalhes</Link>
                            </div>
                        </div>
                        <div className="car-info">
                            <h3>{car.title}</h3>
                            <p className="car-desc">{car.desc}</p>
                            <div className="car-footer">
                                <span className="car-price">{formatCurrency(car.price)}</span>
                                <Link to="/finan" className="btn-simular">Simular</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalog