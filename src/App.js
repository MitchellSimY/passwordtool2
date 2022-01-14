import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import HeaderBar from "./components/HeaderBar";
import Lieberman from './pages/Lieberman';
import GeneratePw from "./pages/GeneratePassword";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LiebermanTool" element={<Lieberman />} />
        <Route path="/GeneratePassword" element={<GeneratePw />} />
      </Routes>
    </div>
  );
}

export default App;
