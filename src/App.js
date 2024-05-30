import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div class="imageContainer1"></div>

      <Main />
    </div>
  );
}
