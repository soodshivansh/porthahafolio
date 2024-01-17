import "./App.css";
import Bg from "./components/Bg";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
        <Navbar />
        <Bg />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Socials />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
