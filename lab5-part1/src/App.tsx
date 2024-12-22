import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu.tsx";

import Koszyk from "./components/koszyk/Koszyk.tsx";
import NowyKoszyk from "./components/koszyk/NowyKoszyk.tsx";
import Licznik from "./components/liczniki/Licznik.tsx";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularz from "./components/formularze/Formularz.tsx";
import Haslo from "./components/formularze/Haslo.tsx";
import Logowanie from "./components/formularze/Logowanie.tsx";
import Aktualizacja from "./components/inne/Aktualizacja.tsx";
import Studenci from "./components/studenci/Studenci.tsx";
import StudentManager from "./components/studenci/StudentManager";
import LicznikEffect from "./components/efekty/LicznikEffect.tsx";
import Tytul from "./components/efekty/Tytul.tsx";
import Odliczanie from "./components/efekty/Odliczanie.tsx";
import Komentarz from "./components/produkty/Komentarz.tsx";

import Komentarze from "./components/produkty/Komentarze.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/koszyk" element={<Koszyk />} />
          <Route path="/nowy-koszyk" element={<NowyKoszyk />} />
          <Route path="/licznik" element={<Licznik />} />
          <Route path="/nowy-licznik" element={<NowyLicznik />} />
          <Route path="/formularz" element={<Formularz />} />
          <Route path="/haslo" element={<Haslo />} />
          <Route path="/logowanie" element={<Logowanie />} />
          <Route path="/aktualizacja" element={<Aktualizacja />} />
          <Route path="/studenci" element={<Studenci />} />
          <Route path="/student-manager" element={<StudentManager />} />
          <Route path="/licznik-effect" element={<LicznikEffect />} />
          <Route path="/tytul" element={<Tytul />} />
          <Route path="/odliczanie" element={<Odliczanie />} />
          <Route
            path="/komentarz"
            element={
              <Komentarz
                id={1}
                body={"hehe ebebe"}
                likes={13}
                postId={3}
                user={{
                  id: 1,
                  username: "noobisko",
                  fullName: "Bob Szmurda",
                }}
              />
            }
          />
          <Route path="/komentarze" element={<Komentarze />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
