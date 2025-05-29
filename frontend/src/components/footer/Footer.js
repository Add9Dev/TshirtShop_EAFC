import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css"; // Import du module CSS

export default function Footer() {
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/api/home")
            .then((res) => {
                if (res.ok) setConnected(true);
            })
            .catch(() => setConnected(false));
    }, []);

    return (
        <footer className={styles.footerContainer}>
            <p className={styles.text}>
                {connected ? "Connecté à la backend" : "Déconnecté de la backend"}
            </p>
        </footer>
    );
}
