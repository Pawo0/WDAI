// import Koszyk from "./components/koszyk/Koszyk.tsx";
// import NowyKoszyk from "./components/koszyk/NowyKoszyk.tsx";
// import Licznik from "./components/liczniki/Licznik.tsx";
// import NowyLicznik from "./components/liczniki/NowyLicznik";
// import Formularz from "./components/formularze/Formularz.tsx";
// import Haslo from "./components/formularze/Haslo.tsx";
// import Logowanie from "./components/formularze/Logowanie.tsx";
// import Aktualizacja from "./components/inne/Aktualizacja.tsx";
// import Studenci from "./components/studenci/Studenci.tsx";
// import StudentManager from "./components/studenci/StudentManager"
// import Licznik from "./components/efekty/Licznik.tsx";
// import Tytul from "./components/efekty/Tytul.tsx"
// import Odliczanie from "./components/efekty/Odliczanie.tsx";
import Komentarz from "./components/produkty/Komentarz.tsx";

function App() {
  return (
    <>
      <Komentarz
        id={1}
        body={"lirem opsum dipsem koksum abra cadabra ala ma kata"}
        likes={75}
        postId={3}
        user={{
          id: 3,
          username: "boooobisko",
          fullName: "Bob Smith "
        }}
      />
    </>
  );
}

export default App;
