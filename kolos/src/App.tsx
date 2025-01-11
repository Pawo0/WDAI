import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./commponents/Main.tsx";
import Autor from "./commponents/Autor.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/autor"} element={<Autor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
