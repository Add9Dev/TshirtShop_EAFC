import React from "react";
import { Box, Typography } from "@mui/material";

export default function Banner({ title, image, position = "center" }) {
    return (
        <Box sx={styles.container}>
            <Box
                component="img"
                src={image}
                alt="Banner"
                sx={{ ...styles.image, objectPosition: position }}
            />
            <Box sx={styles.overlay}>
                <Typography variant="h2" sx={styles.title}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
}

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden"
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 1,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }
    }
};
