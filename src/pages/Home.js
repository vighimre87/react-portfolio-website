import React from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
        </div>
    );
}

export default Home;