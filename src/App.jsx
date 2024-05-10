import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageLoader from "./components/PageLoader";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a delay while loading

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleRouteChange = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a delay while loading
  };

  return (
    <Router onUpdate={handleRouteChange}>
      <div className="min-h-screen overflow-x-hidden font-poppins">
        {loading && <PageLoader />}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
