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
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data.product);
                setImages(data.images);
                setLoading(false);
            });
    }, [id]);

    if (loading || !product) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                <CircularProgress />
            </Box>
        );
    }

    const { name, description, price, size, stock, colorHex } = product;

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
                        {images.map((img, index) => (
                            <Tooltip title={img.altText || ""} key={index}>
                                <Box
                                    component="img"
                                    src={`/products_images/${img.imageUrl}`}
                                    alt={img.altText || name}
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
                        {product.category?.name?.toUpperCase() || "CATÉGORIE"}
                    </Typography>

                    <Typography variant="h4" fontWeight={900} gutterBottom>
                        {name}
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        {typeof price === "number"
                            ? `€${price.toFixed(2).replace(".", ",")}`
                            : "Prix non disponible"}
                    </Typography>

                    <Typography
                        variant="body1"
                        color="white"
                        sx={{ whiteSpace: "pre-line", mt: 2 }}
                    >
                        {description}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 4 }}>
                        Taille : {size}
                    </Typography>

                    <Typography variant="body2">Stock : {stock}</Typography>

                    <Box
                        sx={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            backgroundColor: `#${colorHex}`,
                            border: "1px solid white",
                            mt: 2
                        }}
                        title={`Couleur : #${colorHex}`}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
