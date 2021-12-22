import React from 'react'
import {Jumbotron as Jumbo} from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import styled from 'styled-components';

const styles = styled.div``;

function Jumbotron() {
    return (
        <>
            <styles>
                <Jumbo fluid className="jumbo">
                    <div className='overlay'></div>
                    <Container>
                        <h1>Welcome</h1>
                        <p>I'm using react bootstrap</p>
                    </Container>
                </Jumbo>
            </styles>
        </>

    )
}

export default Jumbotron
