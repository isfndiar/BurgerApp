import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Description from "./components/Home/Description.jsx";
import Image from "./components/Home/Image.jsx";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Navbar />
      <Home>
        <Description />
        <Image />
      </Home>
    </>
  );
}

export default App;
