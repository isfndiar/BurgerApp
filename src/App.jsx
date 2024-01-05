import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  ChooseUs,
  Home,
  Menu,
  Navbar,
  RatingPage,
  HearFromPeople,
} from "./containers";
import Footer from "./containers/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <RatingPage />
      <About />
      <Menu />
      <ChooseUs />
      <HearFromPeople />
      <Footer />
    </>
  );
}

export default App;
