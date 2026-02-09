import React, { useState, useEffect } from 'react';
import '../pages/Home.css';
import './Financiamento.css';

const Financiamento = () => {
    // State for inputs
    const [valorVeiculo, setValorVeiculo] = useState('');
    const [entrada, setEntrada] = useState('');
    const [parcelas, setParcelas] = useState(48);

    // State for results
    const [resultado, setResultado] = useState(null);

    // Constants for simulation (Market Averages)
    const TAXA_JUROS_MENSAL = 0.025; // 2.5% a.m.
    const TAXA_TAC = 1500.00; // Tarifa de Abertura de Crédito
    const ALICOTA_IOF = 0.038; // 3.8% total estimative (simplified)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    const maskCurrency = (value) => {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d)(\d{2})$/, "$1,$2");
        value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
        return value ? "R$ " + value : "";
    };

    const handleCurrencyChange = (e, setter) => {
        let value = e.target.value;
        // Remove R$ and chars to get raw numbers
        value = value.replace(/\D/g, "");
        
        if (value === "") {
            setter("");
            return;
        }

        // Convert to decimal (cents)
        const numberValue = parseFloat(value) / 100;
        
        // Format back to BRL string
        const formatted = numberValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        setter(formatted);
    };

    const handleCalcular = (e) => {
        e.preventDefault();

        // Parse formatted strings back to numbers
        // Remove "R$", non-breaking spaces, dots, and replace comma with dot
        const parseValue = (val) => {
            if (!val) return 0;
            return parseFloat(val.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
        };

        const vVeiculo = parseValue(valorVeiculo);
        const vEntrada = parseValue(entrada);
        
        if (vVeiculo <= 0) {
            alert("Por favor, insira o valor do veículo.");
            return;
        }

        if (vEntrada >= vVeiculo) {
            alert("O valor da entrada deve ser menor que o valor do veículo.");
            return;
        }

        // 1. Calculate Financed Amount Base
        let valorBase = vVeiculo - vEntrada;

        // 2. Add TAC
        let saldoDevedor = valorBase + TAXA_TAC;

        // 3. Add IOF
        let valorIOF = saldoDevedor * ALICOTA_IOF;
        saldoDevedor += valorIOF;

        // 4. Calculate Monthly Payment (Price Table Formula)
        const i = TAXA_JUROS_MENSAL;
        const n = parseInt(parcelas);

        const parcelaMensal = saldoDevedor * (i / (1 - Math.pow(1 + i, -n)));
        const totalPagar = (parcelaMensal * n) + vEntrada;
        const totalJuros = (parcelaMensal * n) - saldoDevedor;

        setResultado({
            valorVeiculo: vVeiculo,
            entrada: vEntrada,
            valorFinanciado: saldoDevedor,
            parcela: parcelaMensal,
            totalFinal: totalPagar,
            totalJuros: totalJuros,
            custoEfetivo: (parcelaMensal * n)
        });
    };

    const handleLimpar = () => {
        setValorVeiculo('');
        setEntrada('');
        setParcelas(48);
        setResultado(null);
    };

    return (
        <div className="financiamento-page">
            <div className="financiamento-overlay"></div>
            <div className="financiamento-container">
                <header className="financiamento-header">
                    <h1>Simulador de Financiamento</h1>
                    <p>Simule as melhores condições do mercado com taxas reais.</p>
                </header>

                <div className="financiamento-content">
                    {/* Form Section */}
                    <div className="financiamento-form-c">
                        <h2>Dados da Simulação</h2>
                        <form onSubmit={handleCalcular}>
                            <div className="form-group premium-input-group">
                                <label>Valor do Veículo</label>
                                <input
                                    type="text"
                                    placeholder="R$ 0,00"
                                    value={valorVeiculo}
                                    onChange={(e) => handleCurrencyChange(e, setValorVeiculo)}
                                    required
                                    className="input-currency"
                                />
                            </div>

                            <div className="form-group premium-input-group">
                                <label>Valor da Entrada</label>
                                <input
                                    type="text"
                                    placeholder="R$ 0,00"
                                    value={entrada}
                                    onChange={(e) => handleCurrencyChange(e, setEntrada)}
                                    className="input-currency"
                                />
                            </div>

                            <div className="form-group">
                                <label>Parcelas</label>
                                <select 
                                    value={parcelas} 
                                    onChange={(e) => setParcelas(e.target.value)}
                                >
                                    <option value="12">12x</option>
                                    <option value="24">24x</option>
                                    <option value="36">36x</option>
                                    <option value="48">48x</option>
                                    <option value="60">60x</option>
                                </select>
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-outline" onClick={handleLimpar}>
                                    Limpar
                                </button>
                                <button type="submit" className="btn-primary-glow">
                                    Simular Agora
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Results Section */}
                    <div className={`financiamento-results ${resultado ? 'active' : ''}`}>
                        {resultado ? (
                            <>
                                <h2>Resultado da Simulação</h2>
                                <div className="result-card">
                                    <div className="result-highlight">
                                        <span>Valor da Parcela</span>
                                        <h3>{formatCurrency(resultado.parcela)} <small>/ mês</small></h3>
                                    </div>
                                    
                                    <div className="result-details">
                                        <div className="detail-row">
                                            <span>Valor Financiado (com taxas):</span>
                                            <strong>{formatCurrency(resultado.valorFinanciado)}</strong>
                                        </div>
                                        <div className="detail-row">
                                            <span>Taxa de Juros (estimada):</span>
                                            <strong>2.5% a.m.</strong>
                                        </div>
                                        <div className="detail-row">
                                            <span>Prazo:</span>
                                            <strong>{parcelas} meses</strong>
                                        </div>
                                        <div className="detail-divider"></div>
                                        <div className="detail-row total">
                                            <span>Custo Total do Veículo:</span>
                                            <strong>{formatCurrency(resultado.totalFinal)}</strong>
                                        </div>
                                    </div>
                                    <p className="disclaimer">
                                        *Valores aproximados incluindo estimativa de IOF e TAC. Sujeito a análise de crédito.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="empty-state">
                                <i className="icon-calculator"></i>
                                <p>Preencha os dados ao lado para ver o resultado detalhado.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Financiamento;