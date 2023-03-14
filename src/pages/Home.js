import React from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}

export default Home;