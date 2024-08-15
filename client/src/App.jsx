// deployed using https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Header from "./Components/Header/Header";
import Lighting from "./Three/Lighting/Lighting";
import Model from "./Three/Model/Model";
import notepad from "./assets/models/notepad.glb";
import laptop from "./assets/models/laptop.glb";
import LoadingModel from "./Three/LoadingModel/LoadingModel";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
