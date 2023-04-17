import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Pages/Local-Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Pages/Local-Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/signup" element={<div>This is signUp page</div>} />
        <Route path="/login" element={<div>This is Login page</div>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<div>This is about page</div>} />
        <Route path="/stores" element={<div>This is Stores page</div>} />
        <Route path="/menu" element={<div>This is menu page</div>} />
        <Route path="/contact" element={<div>This is contact page</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
