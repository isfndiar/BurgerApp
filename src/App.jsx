import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Home from "./containers/HomePage";
import About from "./containers/About";
import RatingPage from "./containers/RatingPage";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <RatingPage />
      <About />
    </>
  );
}

export default App;
