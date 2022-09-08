import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white w-full h-screen ">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <Header />
      <Home /> */}
    </div>
  );
}

export default App;
