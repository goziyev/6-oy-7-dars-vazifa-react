import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/modal";
import Carousel from "./components/carousel";
import Navbar from "./components/Navbar";
import Accardion from "./components/accardions";
import "./App.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Accardion />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/carousel" element={<Carousel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
