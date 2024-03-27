import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
      <img className='product-img' alt='' src={item?.img} />
      <div>{item?.new == true?"choice":""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
