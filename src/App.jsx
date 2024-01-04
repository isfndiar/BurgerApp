import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Home from "./containers/HomePage";
import About from "./containers/About";
import RatingPage from "./containers/RatingPage";
import Menu from "./containers/Menu";
import ChooseUs from "./containers/ChooseUs";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <RatingPage />
      <About />
      <Menu />
      <ChooseUs />
    </>
  );
}

export default App;
