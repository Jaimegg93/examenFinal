import { BrowserRouter, Routes, Route } from "react-router";
import { WeatherProvider } from "./WeatherProvider";
import NavigationBar from "./NavBar";
import WeatherList from "./WeatherList";
import WeatherDetail from "./WeatherDetail";

function WeatherRouter() {
  return (
    <BrowserRouter>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<WeatherList />} />
            <Route path="/ciudad/:nombre" element={<WeatherDetail />} />
          </Route>
        </Routes>
      </WeatherProvider>
    </BrowserRouter>
  );
}

export default WeatherRouter;
