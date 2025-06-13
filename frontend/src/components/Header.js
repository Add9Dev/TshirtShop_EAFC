import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Badge } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoriesMenu from "./CategoryMenu";
import { Link } from "react-router-dom";

// Tableau des éléments de menu avec leurs liens associés
const menuItems = [
    { label: "TOUS NOS PRODUITS", path: "/produits" },
    { label: "CONTACT", path: "/contact" },
    { label: "LEGAL", path: "/legal" },
];

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#0D0E11", boxShadow: "none", px: 3, py: 2.5 }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography
                    variant="h3"
                    color="white"
                    fontWeight={900}
                    sx={{ flexShrink: 0, textDecoration: "none" }}
                    component={Link}
                    to="/"
                >
                    TSHOP
                </Typography>

                <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                    <CategoriesMenu />
                    {menuItems.map((item, i) => (
                        <Typography
                            key={i}
                            variant="button"
                            color="white"
                            fontWeight={700}
                            component={Link}
                            to={item.path}
                            sx={{ cursor: "pointer", textDecoration: "none" }}
                        >
                            {item.label}
                        </Typography>
                    ))}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton>
                        <Link to="/auth">
    <PersonOutlineIcon sx={{ color: "white" }} />
</Link>
                        
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={0} color="info">
                            <ShoppingCartIcon sx={{ color: "white" }} />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
