import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/PokeNavbar";

import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import Details from "./views/Details";


export default function App() {

  return (
 <div className="App">
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:name" element={<Details />} />
    </Routes>
  </BrowserRouter>
 </div>
 );
}
