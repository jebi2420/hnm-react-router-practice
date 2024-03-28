import React from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

const ProductDetail = () => {
  return (
    <Container>
        <Row>
        <Col lg={6} sm={12}>
          <img className='detail-img' alt='' src='https://noona-hnm.netlify.app/ankle-jeans.jpeg' />
        </Col>
        <Col lg={6} sm={12}>
          <div className="detail-cap">
            <div className='detail-title'>슬림핏 맘 하이웨이스트 앵클 진</div>
            <div className='detail-price'>₩29900</div>
            <div className='detail-choice'>choice</div>
            <Dropdown className='drop-down'>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className='add-btn'>추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  
  )
}

export default ProductDetail
