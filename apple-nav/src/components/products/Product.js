import React from 'react'

let Product = ({ product: { icon, name, newProduct } }) => {
  return (
    <div className='product'>
      {/* <object type='image/svg+xml' data={icon} alt={name} /> */}
      <img src={icon} alt={name} className={name} />
      <p>
        {name}
      </p>
      <p className='newProduct'>{newProduct ? 'New' : null}</p>
    </div>
  )
}

export default Product
