import React from 'react'
import { Card, Button } from 'react-bootstrap'

const CardCheckout = ({ tituloCabecalho, titulo, texto, children }) => {
    return (
        <Card className="text-center">
            <Card.Header>
                <Card.Title>{tituloCabecalho}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {texto}
                </Card.Text>
                {children}
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="success">Finalizar Compra</Button>
            </Card.Footer>
        </Card>
    )
}

export default CardCheckout