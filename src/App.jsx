import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
       
      <Footer />
    </>
  );
}

export default App;
