import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
