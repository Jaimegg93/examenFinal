import { BrowserRouter, Routes, Route } from "react-router";
import NewList from "./NewsList";
import NavigationBar from "./NavigationBar";
import NewsDetail from "./NewsDetail";
import NoticiasLayout from "./NoticiasLayout";
import { NewsProvider } from "./NewsProvider";

function Routerss() {
  return (
    <BrowserRouter>
      <NewsProvider>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<NoticiasLayout />}>
            <Route index element={<NewList />} />
            <Route path="NewsList" element={<NewList />} />
            <Route path="NewsDetail/:newid" element={<NewsDetail />} />
          </Route>
        </Routes>
      </NewsProvider>
    </BrowserRouter>
  );
}

export default Routerss;
