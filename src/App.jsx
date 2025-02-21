import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
