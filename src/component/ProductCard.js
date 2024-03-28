import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='product-card btn' onClick={showDetail}>
      <img className='product-img' alt='' src={item?.img} />
      <div className="product-cap">
        <div>{item?.new === true?"choice":""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new === true?"신제품":""}</div>
      </div>
    </div>
  )
}

export default ProductCard
