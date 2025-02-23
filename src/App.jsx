import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value ? Math.max(1, parseInt(value)) : 1, // Ensure at least 1
    }));
  };

  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const addToCart = (product, quantity) => {
    setCart([...cart, { ...product, quantity }]);
    console.log("Cart: ", cart);
  };

  return (
    <div className="App">
      <HashRouter>
        <Navbar cart={cart} increment={increment} decrement={decrement} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/Shop"
              element={
                <ShopPage
                  addToCart={addToCart}
                  quantities={quantities}
                  handleQuantityChange={handleQuantityChange}
                  increment={increment}
                  decrement={decrement}
                />
              }
            />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
