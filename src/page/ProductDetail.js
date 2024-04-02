import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let {id} = useParams();
  const product = useSelector((state)=> state.product.selectedItem);
  const dispatch = useDispatch();

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(()=>{
    getProductDetail() // 처음 만들어졌을때만 호출 됨
},[])

  return (
    <Container>
        <Row>
        <Col lg={6} sm={12}>
          <img className='detail-img' alt='' src= {product?.img} />
        </Col>
        <Col lg={6} sm={12}>
          <div className="detail-cap">
            <div className='detail-title'>{product?.title}</div>
            <div className='detail-price'>{product?.price}</div>
            <div class="tags">
              <div className={`tag ${product?.choice? "":"hidden"}`}>{product?.choice === true?"Conscious choice":""}</div>
              <div className={`tag ${product?.new? "":"hidden"}`}>{product?.new === true?"new":""}</div>
            </div>
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
