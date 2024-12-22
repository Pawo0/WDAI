import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import AddElement from "./pages/AddElement.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";
import Home from "./components/Home.tsx";
import Load from "./pages/Load.tsx";
// import Licznik from "./components/Licznik.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/blog"} element={<MainPage />} />
          <Route path={"/add"} element={<AddElement />} />
          <Route path={"/article/:id"} element={<ArticlePage />} />
          <Route path={"/load-articles"} element={<Load />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
