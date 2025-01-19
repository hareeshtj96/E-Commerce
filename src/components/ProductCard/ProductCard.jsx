import React, { useState } from 'react'
import './ProductCard.css'
import toast from 'react-hot-toast';

const ProductCard = ({ product, onAddToCart }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleButton = (e) => {
        const bttn = e.currentTarget;
        const rect = bttn.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        bttn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        toast.success(`${product.name} added to cart!`, {
            duration: 3000,
            position: 'top-center',
            style: {
                background: 'limegreen',
                color: 'white'
            }
        })

        if (onAddToCart) {
            onAddToCart(product);
        }
    }

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

  return (
    <div className='product-card'>
      <img src={product.image} alt={product.name} className={`product-image ${imageLoaded ? 'loaded' : ''}`} loading='lazy' onLoad={handleImageLoad} />
      <div className='product-detail'>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-price'>₹{product.price}</p>
        <button className='add-to-cart' onClick={handleButton}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
