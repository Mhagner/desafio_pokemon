import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
//import BootstrapTable from 'react'
import axios from 'axios'

import './App.css'

import Pesquisar from './Components/Pesquisar'
import CardPoke from './Components/CardPoke'
import Imagem from './Components/CardPoke/image/pikachu.jpg'
import CardCheckout from './Components/CardCheckout'
import pokeapi from './pokeApi'


function App() {
 

  function getPokemons(){
    pokeapi.get()
      .then(response => console.log(response.data.results))
  }

  return (
    <Container fluid>
      <Row className="espaco">
        <Col sm="4">
          <Pesquisar />
        </Col>
      </Row>
      <Row className="espaco">
        <Col sm={3}>
          <CardPoke
            imagem={Imagem}
            nome='Pikachu'
            descricao="Descrição do pikachu"
            buscar={()=>getPokemons()}
          />
        </Col>
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
