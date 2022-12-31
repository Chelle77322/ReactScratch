import React from "react";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/Navigation/navigate.jsx";
import Samples from "./components/Samples/Sample.jsx"
import Footer from "./components/footer.jsx"
import About from "./components/About/About.jsx"
import Information from "./components/Information/Information.jsx"
import Contact from "./components/Contact/Contact.jsx"
import  "./styles/style.scss"
function App () {
    return (
        <div className ="App">
         
           
            <NavBar />
            <Home />
            <About />
            <Information/>
            <Samples />
            <Contact/>
            <Footer />

        </div>
    );
}
export default App;