import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Navbar from "./components/Navbar";
import { About, Home, Store } from "./pages";
import { Footer } from "./components";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />

      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Container>
    </ShoppingCartProvider>
  )
}

export default App;




