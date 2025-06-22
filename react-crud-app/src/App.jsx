// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import ProductEdit from "./components/ProductEdit";
import Layout from "./components/Layout"; 
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) {
        setProducts(parsed);
      } else {
        fetch("https://dummyjson.com/products")
          .then(res => res.json())
          .then(data => setProducts(data.products));
      }
    } else {
      fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data.products));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList products={products} setProducts={setProducts} />} />
          <Route path="create" element={<ProductCreate setProducts={setProducts} />} />
          <Route path="edit/:id" element={<ProductEdit products={products} setProducts={setProducts} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
