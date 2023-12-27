import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home";
import RatingPage from "./containers/RatingPage";
function App() {
  return (
    <>
      <Navbar />
      <Home></Home>
      <RatingPage />
    </>
  );
}

export default App;
