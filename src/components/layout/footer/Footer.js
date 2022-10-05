import React from 'react'
import newgologo from '../../../img/newgologo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img className='opacity' src={newgologo} alt="Logo da empresa" height="45px" width="45px" />
                </a>
                <span className="mb-3 mb-md-0 text-muted">since &copy; 2022 NewCar, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-facebook"></i></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-whatsapp"></i></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-instagram"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer