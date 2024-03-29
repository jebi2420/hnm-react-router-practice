import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    // UI그려주는건 useState
    const [productList, setProductList] = useState([]);

    const getProducts = async() => {
        // json-server의 Endpoints
        let url = `https://raw.githubusercontent.com/jebi2420/hnm-react-router-practice/main/db.json`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(()=>{
        getProducts()
    },[])

    console.log("productList:",productList)

  return (
    <div>
        <Container>
            <Row>
                {productList.map( (item) => (
                        <Col lg={3}>
                            <ProductCard item={item}/>
                        </Col>
                    )
                )}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
