import './App.css';
import Products from "./pages/products.tsx";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen text-center bg-auto">
        <div className="pt-10">
          <h1 className="text-3xl font-bold">Welcome to WebMart!</h1>
        </div>
        <div className="mt-16 w-full">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
