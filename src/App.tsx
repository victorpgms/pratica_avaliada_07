import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Sobre from "./pages/sobre/Sobre";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex-1" >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/contato" element={<Contato />} />
                    </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
