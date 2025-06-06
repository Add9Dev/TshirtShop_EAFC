import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";

// This is the main App component that sets up the router and defines the routes for the application.
export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/category/:id" element={<CategoryProductsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/legal" element={<LegalPage />} />

            </Routes>
        </Router>
    );
}
