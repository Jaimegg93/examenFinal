// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/routers.js
import { BrowserRouter, Routes, Route } from "react-router";
import NavigationBar from "./NavigationBar";
import { MessProvider } from "./MessProvider";
import MensajesList from "./MensajesList";

function MessRouter() {
  return (
    <>
      <MessProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
              <Route index element={<MensajesList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MessProvider>
    </>
  );
}
export default MessRouter;
