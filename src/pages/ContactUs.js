import React from 'react'

const ContactUs = () => {
    return (
        <div className='container-fluid bg-dark car'>
            <div className='container-form'>
                <h1 className='light'>Entre em contato conosco</h1>
                <form>
                    <div className="mb-3 light">
                        <label className="form-label">Nome Completo</label>
                        <input type="name" className="form-control" />
                        <div className="form-text light">Mande sua dúvida para nossa equipe de especialistas.</div>
                    </div>
                    <div className="mb-3 light">
                        <label className="form-label">E-mail</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3 light">
                        <label className="form-label">Descreva sua mensagem</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-light">Enviar</button>
                    <h2 className='opacity-change'>space</h2>
                </form>
            </div>
        </div>
    )
}

export default ContactUs