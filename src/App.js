import { Products } from "./components/Products";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
