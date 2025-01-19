import React, { useState } from "react";
import ProductList from "../components/ProductCard/ProductList";
import Footer from "../components/Footer/Footer";
import FilterBar from "../components/FilterBar/FilterBar";
import SortBar from "../components/FilterBar/SortBar";
import Header from "../components/Header/Header";
import "./Home.css";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000000],
  });

  const [sort, setSort] = useState("");

  const handleFitlerChange = (e) => {
    const { name, value } = e.target || {};

    setFilters((prev) => {
        if (name === "priceRange") {
            return {
                ...prev,
                [name]: Array.isArray(value) ? value: prev.priceRange
            }
        }

        return {
            ...prev,
            [name]: value
        }
    })
    
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="home">
      <Header cartCount={cartCount} />
      <div className="filter-sort">
        <FilterBar filters={filters} handleFilter={handleFitlerChange} />
        <SortBar sort={sort} handleSortChange={handleSortChange} />
      </div>
      <ProductList
        filters={filters}
        sort={sort}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </div>
  );
};

export default Home;
