import React from "react";

export default function CategoryList({ categories }) {
  return (
    <>
      <h2>Catégories disponibles</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <a href={`/?categoryId=${category.id}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
