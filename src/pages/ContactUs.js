import React, { useEffect } from 'react'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container">
            <div className="container" style={{ maxWidth: '800px', marginTop: '100px', marginBottom: '60px' }}>
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-white">Entre em <span className="text-gradient">Contato</span></h1>
                    <p className="lead text-secondary">Estamos prontos para atender você e tirar todas as suas dúvidas.</p>
                </div>
                
                <div className="card-glass p-5">
                    <form>
                        <div className="mb-4">
                            <label className="form-label text-white">Nome Completo</label>
                            <input type="text" className="form-control" placeholder="Seu nome" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label text-white">E-mail</label>
                            <input type="email" className="form-control" placeholder="seu@email.com" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label text-white">Mensagem</label>
                            <textarea className="form-control" rows="5" placeholder="Como podemos ajudar?" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}></textarea>
                            <div className="form-text text-secondary mt-2">Nossa equipe retornará o mais breve possível.</div>
                        </div>
                        
                        <button type="submit" className="btn-primary-glow w-100 py-3 fw-bold">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs