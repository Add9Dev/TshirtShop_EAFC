import React from "react";
import Banner from "../components/Banner";

// This is the Home page component that uses the Banner component to display a banner at the top of the page.
function Home() {
    return (
        <Banner
            title="Découvrez notre nouvelle collection"
            image="/web_global/banner_home.webp"
            position="top"
        />

    );
}

export default Home;
