import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";


function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategoryId = urlParams.get("categoryId");

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setError("Impossible de charger les catégories"));
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      fetch(`/api/products/byCategory?categoryId=${selectedCategoryId}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch(() => setError("Impossible de charger les produits"));
    } else {
      setProducts([]);
    }
  }, [selectedCategoryId]);

  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      {!selectedCategoryId ? (
        <CategoryList categories={categories} />
      ) : (
        <ProductList products={products} categoryId={selectedCategoryId} />
      )}
    </div>
  );
}

export default Home;
