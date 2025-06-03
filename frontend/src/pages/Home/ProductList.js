import React, { useState } from "react";

export default function ProductList({ products, categoryId }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProductDetails = async (productId) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/products/${productId}`);
      if (!response.ok) throw new Error("Produit introuvable.");
      const data = await response.json();
      setSelectedProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => (window.location.href = "/")}>
        ← Retour aux catégories
      </button>
      <h3>Produits de la catégorie {categoryId}</h3>

      {products.length === 0 ? (
        <p>Aucun produit trouvé.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li
              key={p.id}
              onClick={() => fetchProductDetails(p.id)}
              style={{ cursor: "pointer", marginBottom: "10px" }}
            >
              {p.name} - {p.price} €
            </li>
          ))}
        </ul>
      )}

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {selectedProduct && (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
          <h4>Détails du produit</h4>
          <p><strong>Nom :</strong> {selectedProduct.name}</p>
          <p><strong>Prix :</strong> {selectedProduct.price} €</p>
          <p><strong>Description :</strong> {selectedProduct.description}</p>
          <p><strong>Stock :</strong> {selectedProduct.stock}</p>
          <p><strong>Taille :</strong> {selectedProduct.size}</p>
          <p><strong>Couleur :</strong> {selectedProduct.color}</p>
          <button onClick={() => setSelectedProduct(null)}>Fermer</button>
        </div>
      )}
    </>
  );
}
