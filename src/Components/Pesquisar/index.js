import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const Pesquisar = () => {
    return (
        <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="btnGroupAddon" > @ </InputGroup.Text> 
            </InputGroup.Prepend>
                <FormControl 
                    type="text"
                    placeholder="Pesquisar"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon" 
                />
        </InputGroup>
    )
}

export default Pesquisar