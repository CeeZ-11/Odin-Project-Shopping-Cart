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
      [id]: value ? Math.max(1, parseInt(value)) : 1,
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

  const incrementCartItemQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCartItemQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });

    console.log("Cart: ", cart);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <HashRouter>
        <Navbar
          cart={cart}
          incrementCartItemQuantity={incrementCartItemQuantity}
          decrementCartItemQuantity={decrementCartItemQuantity}
          removeFromCart={removeFromCart}
        />
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
