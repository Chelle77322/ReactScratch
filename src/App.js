import React from "react";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/Navigation/navigate.jsx"


import Footer from "./components/footer.jsx"
import About from "./components/About/About.jsx"
function App () {
    return (
        <div className = "App">
         
           
            <NavBar />
            <Home />
            <About />
            <Footer />

        </div>
    );
}
export default App;