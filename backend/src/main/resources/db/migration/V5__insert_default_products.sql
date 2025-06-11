-- Insertion des produits par défaut
INSERT INTO product (id, color_hex, description, name, price, stock, category_id, collection_id, `size`) VALUES
    (1, 'a98e71', 'Pour les hommes qui recherchent un t-shirt essentiel, ce modèle est un incontournable du vestiaire masculin. Il s''associe facilement avec un jean ou un chino pour un look décontracté.
- T-shirt uni marron
- Coupe regular
- Manches courtes
- Col rond
- 100% coton
- Avec ce t-shirt, n''hésitez pas à compléter votre tenue avec un jean ou un accessoire assorti.', 'T-shirt regular col rond 100% coton - taupe', 9.99, 10, 1, NULL, 1),
    (2, 'FF0000', 'Magnifique t shirt', 'T-shirt manches longue rouge', 39.99, 2, 2, NULL, 3),
    (3, 'CCCCCC', 'Magnifique t shirt', 'T-shirt manches longue gris', 39.99, 4, 1, NULL, 2),
    (4, 'FFFFFF', 'Magnifique t shirt', 'T-shirt classique blanc', 39.99, 13, 2, NULL, 4),
    (5, '0000FF', 'Magnifique t shirt', 'T-shirt classique bleu', 39.99, 10, 1, NULL, 5),
    (6, '00FF00', 'Magnifique t shirt', 'T-shirt classique vert', 39.99, 50, 2, NULL, 1); 