import React from "react";
import { Button, Menu, MenuItem, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// This component renders a button that opens a dropdown menu with categories fetched from an API.
export default function CategoriesMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:8080/api/categories")
            .then(res => res.json())
            .then(response => setCategories(response.data));
    }, []);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div onMouseLeave={handleClose} style={{ display: "inline-block" }}>
            <Button
                id="categories-button"
                aria-controls={open ? "categories-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onMouseEnter={handleMouseEnter}
                sx={{ color: "#00BFFF", fontWeight: 700 }}
            >
                CATÉGORIES
            </Button>

            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "categories-button",
                    sx: {
                        width: "100%",
                        height: "10%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "#0D0E11",
                        p: 6,
                    },
                }}
                PaperProps={{
                    sx: {
                        width: "100vw",
                        height: "12vh",
                        maxWidth: "none",
                        margin: 0,
                        borderRadius: 0,
                        bgcolor: "#0D0E11",
                        top: "5vw !important",
                        left: "0vw !important",
                        overflow: "hidden",
                    },
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                disableAutoFocusItem
                disableEnforceFocus
            >
                <Grid container spacing={4} sx={{ width: "60%" }} justifyContent="center">
                    {categories.map(cat => (
                        <Grid item xs={6} key={cat.id} sx={{ textAlign: "center" }}>
                            <MenuItem
                                component={Link}
                                to={`/category/${cat.id}`}
                                onClick={handleClose}
                                sx={{
                                    justifyContent: "center",
                                    color: "white",
                                    textDecoration: "none",
                                    "&:hover": {
                                        bgcolor: "rgba(255, 255, 255, 0.1)"
                                    }
                                }}
                            >
                                <Typography variant="button" fontWeight={700} color="white">
                                    {cat.name}
                                </Typography>
                            </MenuItem>
                        </Grid>
                    ))}
                </Grid>
            </Menu>
        </div>
    );
}
