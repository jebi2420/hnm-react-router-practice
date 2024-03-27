import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    // UI그려주는건 useState
    const [productList, setProductList] = useState([]);

    const getProducts = async() => {
        // json-server의 Endpoints
        let url = `http://localhost:5001/products`
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
      <ProductCard />
    </div>
  )
}

export default ProductAll
