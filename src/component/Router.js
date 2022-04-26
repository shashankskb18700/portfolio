import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "././Home/Home";
import About from "././About/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
