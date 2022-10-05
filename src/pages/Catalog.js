import React from 'react'
import './Home.css'
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

const Catalog = () => {
    return (
        <div className='container-fluid bg-dark'>
            <h1 className='light'>Nosso <span>catálogo</span></h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-sm-4 card">
                        <figure>
                            <img className='img-fluid adjust-img' src={audia3} alt="Audi a3" />
                            <figcaption className='light'><span className='car-name'>Audi A3 2022</span><br />
                                Uma máquina que combina potência e elegância ao mesmo tempo.
                                <br />
                                <p className='discret'>48x de R$3.112,50</p>
                                <p className='minimal-font'>
                                    Entrada: R$ 40.000,00
                                    <br />
                                    Total a prazo: R$325.400,00
                                </p>
                                <br />
                                <span className='price'>Preço: R$220.000,00</span>
                            </figcaption>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-light'><Link to="/finan">Simular compra</Link></button>
                            <button className='btn btn-light'><Link to="/detail/0">Ver Detalhes</ Link></button>
                            </div>
                        </figure>
                    </div>
                    <div className="col-12 col-sm-4 card">
                        <figure>
                            <img className='img-fluid adjust-img' src={lancerevo} alt="Lancer Evolution" />
                            <figcaption className='light'><span className='car-name'>Lancer Evolution 2022</span><br />
                                Motor boxer, esse <em>sedan</em> vai te fazer voar, com a mais alta tecnologia da Mitsubishi.
                                <br />
                                <p className='discret'>48x de R$3.977,08</p>
                                <p className='minimal-font'>
                                    Entrada: R$ 35.000,00
                                    <br />
                                    Total a prazo: R$414.900,00
                                </p>
                                <br />
                                <span className='price'>Preço: R$280.000,00</span>
                            </figcaption>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-light'><Link to="/finan">Simular compra</Link></button>
                            <button className='btn btn-light'><Link to="/detail/1">Ver Detalhes</ Link></button>
                            </div>
                        </figure>
                    </div>
                    <div className="col-12  col-sm-4 card">
                        <figure>
                            <img className='img-fluid adjust-img' src={golfgti} alt="Golf GTI" />
                            <figcaption className='light'><span className='car-name'> Golf GTI 2022</span><br />
                                Confortável e com uma potência incrível, esse <em>hatch</em> vai te levar aonde quiser.
                                <br />
                                <p className='discret'>48x de R$2.507,29</p>
                                <p className='minimal-font'>
                                    Entrada: R$ 35.000,00
                                    <br />
                                    Total a prazo: R$264.350,00
                                </p>
                                <br />
                                <span className='price'>Preço: R$180.000,00</span>
                            </figcaption>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-light'><Link to="/finan">Simular compra</Link></button>
                            <button className='btn btn-light'><Link to="/detail/2">Ver Detalhes</ Link></button>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 card">
                        <figure>
                            <img className='img-fluid adjust-img' src={skyline} alt="Skyline" />
                            <figcaption className='light'><span className='car-name'>Skyline 2008</span><br />
                                Para os amantes de velozes e furiosos, temos essa lenda de <em>Brian O'conner</em> o famoso Skyline.
                                <br />
                                <p className='discret'>48x de R$4.841,67</p>
                                <p className='minimal-font'>
                                    Entrada: R$ 40.000,00
                                    <br />
                                    Total a prazo: R$488.400,00
                                </p>
                                <br />
                                <span className='price'>Preço: R$320.000,00</span>
                            </figcaption>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-light'><Link to="/finan">Simular compra</Link></button>
                            <button className='btn btn-light'><Link to="/detail/3">Ver Detalhes</ Link></button>
                            </div>
                        </figure>
                    </div>
                    <div className="col-12 col-sm-6 card">
                        <figure>
                            <img className='img-fluid adjust-img' src={subarusti} alt="Subaru" />
                            <figcaption className='light'><span className='car-name'>Subaru 2022</span><br />
                                Caso queira um carro para <em>Off-road</em> temos o mais alto nível do <em>WRC</em>.
                                <br />
                                <p className='discret'>48x de R$2.766,67</p>
                                <p className='minimal-font'>
                                    Entrada: R$ 40.000,00
                                    <br />
                                    Total a prazo: R$292.800,00
                                </p>
                                <br />
                                <span className='price'>Preço: R$200.000,00</span>
                            </figcaption>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-light'><Link to="/finan">Simular compra</Link></button>
                            <button className='btn btn-light'><Link to="/detail/4">Ver Detalhes</ Link></button>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 card">
                        <figure>
                            <img className='img-fluid adjust-img' src={jesko} alt="Jesko" />
                            <figcaption className='light'><span className='car-name'>Jesko 2022</span><br />
                                O Koenigsegg Jesko é uma homenangem ao pai de <em>Christian von Koenigsegg</em> ele criou
                                essa máquina que mistura potência com elegância.
                                <br />
                                <p className='discret'>48x de R$45.822,92</p>
                                <p className='minimal-font'>
                                    Entrada: R$ 150.000,00
                                    <br />
                                    Total a prazo: R$4.439.500,00
                                </p>
                                <br />
                                <span className='price'>Preço: R$2.800.000,00</span>
                            </figcaption>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-light'><Link to="/finan">Simular compra</Link></button>
                            <button className='btn btn-light'><Link to="/detail/5">Ver Detalhes</ Link></button>
                            </div>
                        </figure>
                    </div>
                    <div className="col-12 card">
                        <figure>
                            <img className='img-fluid adjust-img' src={aventador} alt="Aventador" />
                            <figcaption className='light'><span className="car-name">Aventador 2022</span><br />
                                Aventador é o super com a melhor estética existente, potência, elgância, aerodinâmica...
                                <br />
                                <p className='discret'>48x de R$29.395,83</p>
                                <p className='minimal-font'>
                                    Entrada: R$ 100.000,00
                                    <br />
                                    Total a prazo: R$2.851.000,00
                                </p>
                                <br />
                                <span className='price'>Preço: R$1.800.000,00</span>
                            </figcaption>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-light'><Link to="/finan">Simular compra</Link></button>
                            <button className='btn btn-light'><Link to="/detail/6">Ver Detalhes</ Link></button>
                            </div>
                        </figure>
                    </div>
                    <div className="col-12 card">
                        <figure>
                            <img className='img-fluid adjust-img' src={laferrari} alt="La Ferrari" />
                            <figcaption className='light'><span className='car-name'>LaFerrari 2022</span><br />
                                A clássica La Ferrari, com seu vermelho vibrante e seu charme incrível, você
                                não irá deixar ninguém ver a sua sombra.
                                <br />
                                <p className='discret'>48x de R$41.000,00</p>
                                <p className='minimal-font'>
                                    Entrada: R$ 100.000,00
                                    <br />
                                    Total a prazo: R$3.992.000,00
                                </p>
                                <br />
                                <span className='price'>Preço: R$2.500.000,00</span>
                            </figcaption>
                            <div className='d-flex justify-content-between'>
                            <button className='btn btn-light'><Link to="/finan">Simular compra</Link></button>
                            <button className='btn btn-light'><Link to="/detail/7">Ver Detalhes</ Link></button>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            <div>
                <p>Escolha o seu</p>
            </div>
        </div>
    )
}

export default Catalog