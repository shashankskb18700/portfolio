import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "././Home/Home";
import About from "././About/About";
import Work from "././work/Work";
import Contact from "./Contacts/Contacts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
