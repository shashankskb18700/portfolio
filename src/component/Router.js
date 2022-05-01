import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "././Home/Home";
import About from "././About/About";
import Work from "././work/Work";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
};

export default AppRouter;
