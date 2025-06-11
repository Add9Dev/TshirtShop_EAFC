-- Création de la table category
CREATE TABLE IF NOT EXISTS category (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table collection
CREATE TABLE IF NOT EXISTS collection (
    id INT NOT NULL,
    date DATE NOT NULL,
    nom VARCHAR(255) NOT NULL,
    name VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table role
CREATE TABLE IF NOT EXISTS role (
    id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table size
CREATE TABLE IF NOT EXISTS size (
    id INT NOT NULL,
    name VARCHAR(4) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table status
CREATE TABLE IF NOT EXISTS status (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table product
CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL,
    color_hex VARCHAR(255) DEFAULT NULL,
    description VARCHAR(500) DEFAULT NULL,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    stock INT DEFAULT 0,
    category_id INT DEFAULT NULL,
    collection_id INT DEFAULT NULL,
    size INT DEFAULT NULL,
    PRIMARY KEY (id),
    KEY category_id (category_id),
    KEY size (size),
    KEY collection_id (collection_id),
    CONSTRAINT FK1m7avyryg7yow6ytttlt7qcun FOREIGN KEY (collection_id) REFERENCES collection (id),
    CONSTRAINT FK1mtsbur82frn64de7balymq9s FOREIGN KEY (category_id) REFERENCES category (id),
    CONSTRAINT FKs1kqbnmfuc3o0efvokjxcwe69 FOREIGN KEY (size) REFERENCES size (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table product_image
CREATE TABLE IF NOT EXISTS product_image (
    id INT NOT NULL,
    alt_text VARCHAR(255) DEFAULT NULL,
    image_url VARCHAR(255) NOT NULL,
    is_primary BIT(1) DEFAULT b'0',
    product_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    KEY product_id (product_id),
    KEY idx_product_image_product_id (product_id),
    CONSTRAINT FK6oo0cvcdtb6qmwsga468uuukk FOREIGN KEY (product_id) REFERENCES product (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table user
CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL,
    address VARCHAR(255) DEFAULT NULL,
    city VARCHAR(100) DEFAULT NULL,
    created_at DATETIME(6) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    mail VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    postal_code VARCHAR(10) DEFAULT NULL,
    role_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY mail (mail),
    KEY role_id (role_id),
    CONSTRAINT FKn82ha3ccdebhokx3a8fgdqeyy FOREIGN KEY (role_id) REFERENCES role (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table cart
CREATE TABLE IF NOT EXISTS cart (
    id INT NOT NULL,
    created_at DATE NOT NULL,
    user_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    CONSTRAINT FKl70asp4l4w0jmbm1tqyofho4o FOREIGN KEY (user_id) REFERENCES user (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table cart_item
CREATE TABLE IF NOT EXISTS cart_item (
    id INT NOT NULL,
    quantity INT NOT NULL,
    cart_id INT DEFAULT NULL,
    product_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    KEY cart_id (cart_id),
    KEY product_id (product_id),
    CONSTRAINT FK1uobyhgl1wvgt1jpccia8xxs3 FOREIGN KEY (cart_id) REFERENCES cart (id),
    CONSTRAINT FKjcyd5wv4igqnw413rgxbfu4nv FOREIGN KEY (product_id) REFERENCES product (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table order
CREATE TABLE IF NOT EXISTS `order` (
    id INT NOT NULL,
    created_at DATE NOT NULL,
    status_id INT DEFAULT NULL,
    user_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    KEY status_id (status_id),
    CONSTRAINT FKcpl0mjoeqhxvgeeeq5piwpd3i FOREIGN KEY (user_id) REFERENCES user (id),
    CONSTRAINT FKdx710bron94r3lcxk8x1nrbt4 FOREIGN KEY (status_id) REFERENCES status (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Création de la table order_item
CREATE TABLE IF NOT EXISTS order_item (
    id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    order_id INT DEFAULT NULL,
    product_id INT DEFAULT NULL,
    PRIMARY KEY (id),
    KEY order_id (order_id),
    KEY product_id (product_id),
    CONSTRAINT FK551losx9j75ss5d6bfsqvijna FOREIGN KEY (product_id) REFERENCES product (id),
    CONSTRAINT FKs234mi6jususbx4b37k44cipy FOREIGN KEY (order_id) REFERENCES `order` (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insertion des rôles par défaut
INSERT INTO role (id, name) VALUES (1, 'USER');
INSERT INTO role (id, name) VALUES (2, 'ADMIN');

-- Insertion des statuts par défaut
INSERT INTO status (id, name) VALUES (1, 'EN_ATTENTE');
INSERT INTO status (id, name) VALUES (2, 'CONFIRMEE');
INSERT INTO status (id, name) VALUES (3, 'EN_PREPARATION');
INSERT INTO status (id, name) VALUES (4, 'EXPEDIEE');
INSERT INTO status (id, name) VALUES (5, 'LIVREE');
INSERT INTO status (id, name) VALUES (6, 'ANNULEE'); 