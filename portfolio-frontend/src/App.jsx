import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cursor from './components/Cursor';
import './App.css';
import Intro from "./components/Skill/Intro";
import { AnimatePresence } from "framer-motion";
import GlowBackground from './components/Skill/GlowBackground';

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <Router>
      <GlowBackground />
      <AnimatePresence mode="wait">
        {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      </AnimatePresence>
      
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
