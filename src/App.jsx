import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import DumpMe from "./Pages/DumpMe";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<DumpMe />} />
        <Route path="/signup" element={<DumpMe />} />
        <Route path="/dumpme" element={<DumpMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;