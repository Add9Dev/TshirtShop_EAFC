import React from "react";

export default function ProductList({ products, categoryId }) {
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
            <li key={p.id}>
              {p.name} - {p.price} €
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
