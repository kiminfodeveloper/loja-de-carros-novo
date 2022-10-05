import React, { useState } from 'react'
import '../pages/Home.css'
import './Financiamento.css'
import './Login.css'

const Financiamento = () => {
    // setando as variaveis
    const [vc, setVc] = useState();
    const [ve, setVe] = useState();
    const [np, setNp] = useState();
    const [total, setTotal] = useState();
    const [final, setFinal] = useState();

    // atribuindo valores

    const calcFinanciamento = () => {
        const vdc = parseFloat(vc);
        const vde = parseFloat(ve);
        const vnp = parseInt(np);

        const vtcep = parseFloat((vdc - vde) / vnp * 0.83);
        const vfdc = parseFloat(vtcep * vnp + vc * 0.80);

        setTotal(vtcep.toFixed(2));
        setFinal(vfdc.toFixed(2));
    };

    // limpando valores

    const limparCache = () => {
        setVc("");
        setVe("");
        setNp("");
        setTotal("");
        setFinal("");
    };



    return (
        <div className="container-fluid bg-dark car">
            <h1 className='light'>Faça uma simulação para o <br /> <em>Financiamento do seu carro aqui!</em></h1>
            <div className='container-form'>
                <div className='container adjust-components'>
                    <div className='mb-3 light'>
                        <label className='form-label light'> Nome completo:</label>
                        <input type="text" className='form-control' />
                        <label className='form-label light'>Valor do carro:</label>
                        <input type="number" className='form-control' required value={vc} onChange={e => setVc(e.target.value)} />
                        <label className='form-label light'>Valor de entrada:</label>
                        <input type="number" className='form-control' required value={ve} onChange={e => setVe(e.target.value)} />
                        <label className='form-label light'>Qtd. Parcelas:</label>
                        <input type="number" className='form-control' required value={np} onChange={e => setNp(e.target.value)} />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-light' onClick={calcFinanciamento}>Calcular</button>
                        <button className='btn btn-light' onClick={limparCache}>Limpar</button>
                    </div>
                </div>

                <div className="container adjust-components">
                    <div className="mb-3 light">
                        <label className='form-label light'>Valor das parcelas:</label>
                        <input type="text" className='form-control' value={total} />
                        <label className='form-label light'>Valor do Carro:</label>
                        <input type="text" className='form-control' value={final} />
                        <label className='opacity-change'>space</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financiamento