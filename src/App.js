import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import About from "./pages/About";

function App() {
  return (
    <div className="bg-white w-full h-screen ">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {/* <Header />
      <Home /> */}
    </div>
  );
}

export default App;
