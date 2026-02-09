import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { carsData } from '../data/cars'
import './Details.css'

const Details = () => {
    const { id } = useParams()
    const car = carsData[parseInt(id)];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!car) {
        return (
            <div className="details-container container">
                <div className="error-message">
                    <h2>Carro não encontrado</h2>
                    <Link to="/catalog" className="btn-neon">Voltar ao Catálogo</Link>
                </div>
            </div>
        )
    }

    const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

    return (
        <div className="details-page">
            <div className="details-container container">
                {/* Back Button */}
                <div className="back-link-container">
                    <Link to="/catalog" className="back-link">
                        <i className="bi bi-arrow-left"></i> Voltar ao Catálogo
                    </Link>
                </div>

                <div className="details-grid">
                    {/* Left Column: Image */}
                    <div className="details-image-section card-glass">
                        <img src={car.img} alt={car.title} className="detail-img" />
                        <div className="detail-tags">
                            <span className="tag">{car.category}</span>
                            <span className="tag">{car.seats}</span>
                        </div>
                    </div>

                    {/* Right Column: Info */}
                    <div className="details-info-section">
                        <h1 className="detail-title">{car.title}</h1>
                        <p className="detail-intro">{car.desc}</p>
                        
                        <div className="detail-price-card card-glass">
                            <span className="price-label">Preço à vista</span>
                            <h2 className="price-value">{formatCurrency(car.price)}</h2>
                            <p className="price-installment">
                                ou entrada de <strong>{formatCurrency(car.price * 0.2)}</strong> <br/>
                                + 48x de <strong>{formatCurrency(((car.price * 0.8) * 1.025) / 48 * 1.5)}</strong>*
                            </p>
                        </div>

                        <div className="detail-description">
                            <h3>Sobre o Veículo</h3>
                            <p>{car.details || car.desc}</p>
                        </div>

                        <div className="detail-actions">
                            <Link to="/finan" className="btn-neon btn-lg">
                                Simular Financiamento
                            </Link>
                            <Link to="/contactus" className="btn-outline-neon btn-lg">
                                Falar com Vendedor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details