import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
