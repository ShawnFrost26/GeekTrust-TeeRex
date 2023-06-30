
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Filter from "./components/Filter/Filter";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/cartPage/Cart";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ display: "flex", marginTop:"5rem" }}>
                <div>
                  <Filter />
                </div>
                <div>
                  <ProductList />
                </div>
              </div>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
