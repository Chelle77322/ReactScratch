import React from "react";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/Navigation/navigate.jsx";
import Samples from "./components/Samples/Sample.jsx"
import Footer from "./components/footer.jsx"
import About from "./components/About/About.jsx"
import  "./styles/style.scss"
function App () {
    return (
        <div className ="App">
         
           
            <NavBar />
            <Home />
            <About />
            <Samples />
            <Footer />

        </div>
    );
}
export default App;