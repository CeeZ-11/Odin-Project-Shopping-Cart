import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart([...cart, { ...product, quantity }]);
    console.log("Cart: ", cart);
  };

  return (
    <div className="App">
      <HashRouter>
        <Navbar cartCount={cart.length} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Shop" element={<ShopPage addToCart={addToCart} />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
