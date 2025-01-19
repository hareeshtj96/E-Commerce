import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import productsData from "../../data/products.json";
import { ClipLoader } from 'react-spinners';

const ProductList = ({ filters, sort, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    //loading delay
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
      setIsVisible(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (!loading) {
        setIsVisible(false);
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300)
        return () => clearTimeout(timer);
    }
  },[filters, sort, loading])

  const filteredProducts = products.filter((product) => {
    const categoryMatch = !filters.category || product.category === filters.category;
    const priceMatch = product.price >= (filters.priceRange?.[0] || 0) && product.price <= (filters.priceRange?.[1] || 1000000)

    return categoryMatch && priceMatch
  });

  const sortedProducts = [...filteredProducts].sort((a,b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "-price") return b.price - a.price;
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "-name") return b.name.localeCompare(a.name);
    return 0;
  });


  if (loading) return <div className="spinner"><ClipLoader  size={50} /><h1>Loading...</h1></div>;

  return (
    <>
    <div className={`product-list ${isVisible ? "visible" : ""}`}>
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
    </>
    
  );
};

export default ProductList;
