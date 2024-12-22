import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import AddElement from "./pages/AddElement.tsx";
// import Licznik from "./components/Licznik.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/blog"} element={<MainPage />} />
          <Route path={"/add"} element={<AddElement />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
