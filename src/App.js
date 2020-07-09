import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
//import BootstrapTable from 'react'

import './App.css'

import Pesquisar from './Components/Pesquisar'
import CardPoke from './Components/CardPoke'
import Imagem from './Components/CardPoke/image/pikachu.jpg'
import CardCheckout from './Components/CardCheckout'
import pokeapi from './pokeApi'


function App() {
 
  const [pokemons, setPokemons] = useState([]) 



  useEffect(()=>{
    pokeapi.get()
    .then(response => {
      response.data.results.map(pokemon => {
        pokeapi.get(pokemon.url)
          .then(poke => {
            pokemons.push(poke.data)
            setPokemons([...pokemons])
          })
      })
    })
  }, [])

 /*  function renderPokemons(){
    const pokemon = pokemons || []
    pokemon.map((poke, index) => {
      <Col key={index} sm={3}>
          <CardPoke
            imagem={poke.sprites.front_default}
            nome={poke.name}
            descricao={15.60}
            buscar={()=>getPokemons()}
          />
      </Col>
    })
  } */



  function getPokemons(){
    
  }

  return (
    <Container fluid>
      <Row className="espaco">
        <Col sm="4">
          <Pesquisar />
        </Col>
      </Row>
      <Row className="espaco">
     {pokemons.map((poke, index) => (
      <Col key={index} sm={3}>
          <CardPoke
            imagem={poke.sprites.front_default}
            nome={poke.name}
            descricao={`R$ ${15.60}`}
            buscar={()=>getPokemons()}
          />
      </Col>
     ))}
        <Col sm={3}>
          <CardCheckout
            tituloCabecalho="Meu Carrinho"

          />
        </Col>
      </Row> 
    </Container>
  );
}

export default App;
