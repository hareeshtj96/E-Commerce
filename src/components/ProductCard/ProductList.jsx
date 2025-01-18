import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'
import products from '../../data/products.json';

const ProductList = () => {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
