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
        <div className="tags">
          <div className={`tag ${item.choice? "":"hidden"}`}>{item?.choice === true?"Conscious choice":""}</div>
          <div className={`tag ${item.new? "":"hidden"}`}>{item?.new === true?"new":""}</div>
        </div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
      </div>
    </div>
  )
}

export default ProductCard
