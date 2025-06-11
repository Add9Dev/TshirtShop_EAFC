import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Typography,
    Grid,
    CircularProgress,
    Tooltip
} from "@mui/material";
// This component displays a single product page with details and images.
// It fetches product data from an API and displays it in a structured layout.
// The product details include name, description, price, size, stock, and color.
// The images are displayed in a scrollable gallery on the left side, and the product details are shown on the right side.
// The page also handles loading states and displays a spinner while fetching data.
export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8080/api/products/${id}`)
            .then((res) => res.json())
            .then((response) => {
                if (response.status === "success") {
                    setProduct(response.data);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!product) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                <Typography variant="h5" color="white">
                    Produit non trouvé
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: "#0D0E11", color: "white", px: 6, py: 7 }}>
            <Grid
                container
                spacing={6}
                sx={{
                    flexWrap: "nowrap",
                    minHeight: 500
                }}
            >
                <Grid item xs={4}>
                    <Box
                        sx={{
                            maxHeight: 600,
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            pr: 2
                        }}
                    >
                        {product.images.map((img, index) => (
                            <Tooltip title={img.altText || ""} key={index}>
                                <Box
                                    component="img"
                                    src={`/products_images/${img.imageUrl}`}
                                    alt={img.altText || product.name}
                                    sx={{
                                        width: "100%",
                                        maxHeight: 1000,
                                        objectFit: "cover",
                                        borderRadius: 2,
                                        border: img.isPrimary ? "2px solid #00BFFF" : "1px solid #444"
                                    }}
                                />
                            </Tooltip>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={8} sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="overline" color="gray">
                        {product.categoryName?.toUpperCase() || "CATÉGORIE"}
                    </Typography>

                    <Typography variant="h4" fontWeight={900} gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        {typeof product.price === "number"
                            ? `€${product.price.toFixed(2).replace(".", ",")}`
                            : "Prix non disponible"}
                    </Typography>

                    <Typography
                        variant="body1"
                        color="white"
                        sx={{ whiteSpace: "pre-line", mt: 2 }}
                    >
                        {product.description}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 4 }}>
                        Stock : {product.stock}
                    </Typography>

                    {product.colorHex && (
                        <Box
                            sx={{
                                width: 24,
                                height: 24,
                                borderRadius: "50%",
                                backgroundColor: `#${product.colorHex}`,
                                border: "1px solid white",
                                mt: 2
                            }}
                            title={`Couleur : #${product.colorHex}`}
                        />
                    )}
                </Grid>
            </Grid>
        </Box>
    );
}
