import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Grid,
    Typography,
    CircularProgress,
    Paper,
    Tooltip
} from "@mui/material";
// This component displays products of a specific category.
// It fetches products from an API based on the category ID from the URL parameters.
//// The products are displayed in a grid layout with images, names, and prices.
export default function CategoryProductsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8080/api/products/byCategory?categoryId=${id}`)
            .then((res) => res.json())
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            });
    }, [id]);

    const categoryName = products[0]?.categoryName || "Catégorie";

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!loading && products.length === 0) {
        return (
            <Box
                sx={{
                    backgroundColor: "#0D0E11",
                    minHeight: "100vh",
                    px: 6,
                    py: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Typography variant="h4" color="white" fontWeight={900} mb={4}>
                    Aucun produit trouvé
                </Typography>

            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: "#0D0E11", minHeight: "100vh", px: 6, py: 8 }}>
            <Typography
                variant="h3"
                fontWeight={900}
                color="white"
                textAlign="center"
                mb={6}
            >
                {categoryName.toUpperCase()}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {products.map((product) => {
                    const thumbnail = product.images.find((img) => img.isPrimary);
                    const imageUrl = thumbnail
                        ? `/products_images/${thumbnail.imageUrl}`
                        : "/products_images/placeholder.webp";

                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: "flex" }}>
                            <Paper
                                elevation={0}
                                onClick={() => navigate(`/product/${product.id}`)}
                                sx={{
                                    backgroundColor: "#0D0E11",
                                    color: "white",
                                    cursor: "pointer",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "stretch",
                                    width: "100%",
                                    height: "100%",
                                    transition: "transform 0.2s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.02)"
                                    }
                                }}
                            >
                                <Tooltip title={thumbnail?.altText?.trim() || product.name}>
                                    <Box
                                        component="img"
                                        src={imageUrl}
                                        alt={thumbnail?.altText || product.name}
                                        sx={{
                                            width: "100%",
                                            height: 400,
                                            objectFit: "cover",
                                            objectPosition: "center",
                                            mb: 2
                                        }}
                                    />
                                </Tooltip>

                                <Box sx={{ px: 2, flexGrow: 1 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={700}
                                        color="white"
                                        gutterBottom
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body1" color="white">
                                        {typeof product.price === "number"
                                            ? `€${product.price.toFixed(2).replace(".", ",")}`
                                            : "Prix indisponible"}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
