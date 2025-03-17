import { BrowserRouter, Routes, Route } from "react-router";
import { CinesProvider } from "./cinesProvider";
import NavigationBar from "./NavigationBar";
import PaginaPrincipal from "./cinesList";
import CinesDetail from "./cinesDetail";

function CinesRouter() {
  return (
    <BrowserRouter>
      <CinesProvider>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<PaginaPrincipal />} />
            <Route path="/sala/:idsala" element={<CinesDetail />} />
          </Route>
        </Routes>
      </CinesProvider>
    </BrowserRouter>
  );
}

export default CinesRouter;
