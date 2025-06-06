import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";


export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/category/:id" element={<CategoryProductsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />

            </Routes>
        </Router>
    );
}
