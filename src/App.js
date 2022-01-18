import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { 
 BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
  import Home from "./Views/Home";
  import AboutUs from "./Views/AboutUs";
import Contact from "./Views/Contact";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <div className="pl-3">
      <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AboutUs#aboutpage" element={<AboutUs />} />
        <Route path="/product/:id" element={<Contact />} />
      </Routes>
      </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;
