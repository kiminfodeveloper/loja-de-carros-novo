import React from 'react'
import './Home.css'
import './Login.css'
import './Financiamento.css'

const Login = () => {
    return (
        <div className='container-fluid bg-dark car'>
            <div className='container-form'>
            <h1 className='light'>Faça o seu Login</h1>
           <form>
                <div className="mb-3 light">
                    <label className="form-label">E-mail</label>
                    <input type="email" className="form-control" />
                    <div className="form-text light">Nunca revele sua senha.</div>
                </div>
                <div className="mb-3 light">
                    <label className="form-label">Senha</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-light">Login</button>
            </form>
            <h2 className='light'>Crie uma Conta</h2>
            <form>
                <div className="mb-3 light">
                    <label className="form-label">E-mail</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3 light">
                    <label className="form-label">Senha</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3 light">
                    <label className="form-label">Digite novamente sua senha</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-light">Cadastre-se</button>
                <h2 className='opacity-change'>space</h2>
            </form>
            </div>
        </div>
    )
}

export default Login