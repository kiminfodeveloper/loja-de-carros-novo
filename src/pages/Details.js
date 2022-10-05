import React from 'react'

// img
import loading from '../img/loading.gif'

// link
import { Link } from 'react-router-dom'

// hooks
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

  let { id } = useParams()


  const [nameCar] = useState([
    'Audi A3 2022',
    'Lancer Evolution 2022',
    'Golf GTI 2022',
    'Skyline 2088',
    'Subaru 2022',
    'Jesko 2022',
    'Aventador 2022',
    'LaFerrari 2022'
  ])

  const [descriptionCar] = useState([
    'Uma máquina que combina potência e elegância ao mesmo tempo.',
    'Motor boxer, esse sedan vai te fazer voar, com a mais alta tecnologia da Mitsubishi.',
    'Confortável e com uma potência incrível, esse hatch vai te levar aonde quiser.',
    'Para os amantes de velozes e furiosos, temos essa lenda de Brian Oconner o famoso Skyline.',
    'Caso queira um carro para Off-road temos o mais alto nível do WRC.',
    'O Koenigsegg Jesko é uma homenangem ao pai de Christian von Koenigsegg ele criou essa máquina que mistura potência com elegância.',
    'Aventador é o super com a melhor estética existente, potência, elgância, aerodinâmica...',
    'A clássica La Ferrari, com seu vermelho vibrante e seu charme incrível, você não irá deixar ninguém ver a sua sombra.'
  ])

  const [priceCar] = useState([
    'Preço: R$220.000,00',
    'Preço: R$280.000,00',
    'Preço: R$180.000,00',
    'Preço: R$320.000,00',
    'Preço: R$200.000,00',
    'Preço: R$2.800.000,00',
    'Preço: R$1.800.000,00',
    'Preço: R$2.500.000,00'
  ])

  const [categoryCar] = useState([
    'Sedan',
    'Sedan',
    'Hacth',
    'Esportivo',
    'Sedan',
    'Esportivo Luxuoso',
    'Esportivo Luxuoso',
    'Esportivo Luxuoso'
  ])

  const [spaceCar] = useState([
    '5 lugares',
    '5 lugares',
    '5 lugares',
    '4 lugares',
    '5 lugares',
    '2 lugares',
    '2 lugares',
    '2 lugares'
  ])


  return (
    <div className="container-fluid bg-dark">

      <div className="row">
        <div className="col-12 card">
          <img className='img-fluid adjust-img' src={loading} />
          <h1 className='light'>{nameCar[id]}</h1>
          <p className='light'>{descriptionCar[id]}</p>
          <p className='light'>{priceCar[id]}</p>
          <p className='light'>{categoryCar[id]}
            <br />
            {spaceCar[id]}
          </p>
          <button className='btn btn-light'><Link to="/catalog">Voltar ao catálogo</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Details