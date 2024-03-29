import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    // UI그려주는건 useState
    const [productList, setProductList] = useState([]);
    const [query, setQuery]= useSearchParams();

    const getProducts = async() => {
        let searchQuery = query.get('q') || "";
        console.log("searchQ : ",searchQuery)
        // json-server의 Endpoints
        let url = `https://my-json-server.typicode.com/jebi2420/hnm-react-router-practice/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(()=>{
        getProducts() // 처음 만들어졌을때만 호출 됨
    },[query])// query가 바뀌면 다시 getProduct() 호출해줘

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
