import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import DumpMe from "./Pages/DumpMe";
import AuthPage from "./Pages/AuthPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from './Components/ScrollToTop';
import ErrorPage from './Pages/ErrorPage';
import ToastContainer from './Components/ToastContainer';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Routes */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Checkout / DumpMe Routes */}
        <Route path="/checkout" element={<DumpMe />} />
        <Route path="/dumpme" element={<DumpMe />} />
        <Route path="/payment" element={<DumpMe />} />

        {/* Error Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;