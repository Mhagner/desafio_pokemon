import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardPoke = ({ imagem, nome, descricao, buscar }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagem} />
            <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <Card.Text>
                   {descricao}
                </Card.Text>
                <Button variant="primary" onClick={buscar}>Comprar</Button>
            </Card.Body>
        </Card>
    )
}

export default CardPoke