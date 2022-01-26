import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { 
 BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
  import Home from "./Views/Home";
  import AboutUs from "./Views/AboutUs";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <div className="pl-3 pb-40">
      <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/#FooterPagedown" element={<Footer />} />
      </Routes>
      </Router>
    </div>
    <div id="FooterPagedown">
    <Footer className="mt-6" />
    </div>
    </div>
  );
}

export default App;
