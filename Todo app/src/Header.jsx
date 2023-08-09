import React from 'react'
import { Container,Row,Col } from "reactstrap";
import Todos from './Todos/Todos';

function Header() {
  return (
    <div>
       <Container className='my-3'>
        <Row>
            <Col>
                <Todos/>
            </Col>
        </Row>
       </Container>

    </div>
  )
}

export default Header