import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductDetails from "./components/ProductDetails";
import CompareProducts from "./components/CompareProducts";
import "./styles.css";

const App = () => {
  const [compareList, setCompareList] = useState([]);

  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<ProductDetails compareList={compareList} setCompareList={setCompareList} />} />
            <Route path="/compare" element={<CompareProducts compareList={compareList} setCompareList={setCompareList} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
