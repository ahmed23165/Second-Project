import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Team from "./Component/Team/Team";
import Services from "./Component/Services/Services";
import Projects from "./Component/Projects/Projects";
import Blogs from "./Component/Blogs/Blogs";
import Contact from "./Component/Contact/Contact";

const App = () => {
  return (
    <div  className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route  path="/services" element={<Services />}  />
          <Route  path="/projects" element={<Projects />}  />
          <Route  path="/blogs" element={<Blogs />}/>
          <Route  path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
