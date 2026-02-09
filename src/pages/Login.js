import React, { useEffect, useState } from 'react'
import './Login.css'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <h1>Bem-vindo à <span className="text-gradient">NewGo Car</span></h1>
                    <p>Acesse sua conta para simular financiamentos e salvar favoritos.</p>
                </div>

                <div className="auth-card card-glass">
                    <div className="auth-tabs">
                        <button 
                            className={`auth-tab ${isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button 
                            className={`auth-tab ${!isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Criar Conta
                        </button>
                    </div>

                    <div className="auth-content">
                        {isLogin ? (
                            <form className="auth-form fade-in">
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="email" placeholder="seu@email.com" className="premium-input" />
                                </div>
                                <div className="form-group">
                                    <label>Senha</label>
                                    <input type="password" placeholder="••••••••" className="premium-input" />
                                </div>
                                <button type="submit" className="btn-primary-glow full-width">Entrar</button>
                                <p className="auth-footer">
                                    Esqueceu sua senha? <a href="#">Recuperar</a>
                                </p>
                            </form>
                        ) : (
                            <form className="auth-form fade-in">
                                <div className="form-group">
                                    <label>Nome Completo</label>
                                    <input type="text" placeholder="Seu nome" className="premium-input" />
                                </div>
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="email" placeholder="seu@email.com" className="premium-input" />
                                </div>
                                <div className="form-group">
                                    <label>Senha</label>
                                    <input type="password" placeholder="••••••••" className="premium-input" />
                                </div>
                                <div className="form-group">
                                    <label>Confirmar Senha</label>
                                    <input type="password" placeholder="••••••••" className="premium-input" />
                                </div>
                                <button type="submit" className="btn-primary-glow full-width">Cadastrar</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login