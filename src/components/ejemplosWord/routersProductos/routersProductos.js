import { BrowserRouter, Routes, Route } from "react-router";
import Productos from "./Productos";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";

function RoutersProductos() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:prodId?" element={<Productos />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutersProductos;
