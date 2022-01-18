import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { 
 HashRouter,
  Routes,
  Route } from "react-router-dom";
  import Home from "./Views/Home";
  import AboutUs from "./Views/AboutUs";
import Contact from "./Views/Contact";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <div className="pl-3">
      <HashRouter history={hashHistory}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="AboutUs" element={<AboutUs />} />
        <Route path="/AboutUs#aboutpage" element={<AboutUs />} />
        <Route path="/product/:id" element={<Contact />} />
      </Routes>
      </HashRouter>
    </div>
    <Footer />
    </div>
  );
}

export default App;
