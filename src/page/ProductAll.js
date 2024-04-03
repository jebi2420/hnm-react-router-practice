import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {
    // UI그려주는건 useState
    const productList = useSelector(state => state.product.productList);
    const [query, setQuery]= useSearchParams();
    const dispatch = useDispatch()

    const getProducts = () => {
        let searchQuery = query.get('q') || "";
        dispatch(fetchProducts(searchQuery))
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
