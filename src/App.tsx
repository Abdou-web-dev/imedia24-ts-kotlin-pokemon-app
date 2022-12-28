import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Intro from "./pages/Intro";

// must use REDUX !!!!!!!!!!!
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/intro" element={<Intro />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
