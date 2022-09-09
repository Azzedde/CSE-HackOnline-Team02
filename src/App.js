import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import About from "./pages/About";
import Universities from "./pages/Universities";
import Clubs from "./pages/Clubs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white w-full h-screen ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/clubs" element={<Clubs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
