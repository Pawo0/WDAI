import { Link, Outlet } from 'react-router-dom';
export default function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/koszyk">Koszyk</Link>
          </li>
          <li>
            <Link to="/nowy-koszyk">Nowy koszyk</Link>
          </li>
          <li>
            <Link to="/licznik">Licznik</Link>
          </li>
          <li>
            <Link to="/nowy-licznik">Nowy licznik</Link>
          </li>
          <li>
            <Link to="/formularz">Formularz</Link>
          </li>
          <li>
            <Link to="/haslo">Hasło</Link>
          </li>
          <li>
            <Link to="/logowanie">Logowanie</Link>
          </li>
          <li>
            <Link to="/aktualizacja">Aktualizacja</Link>
          </li>
          <li>
            <Link to="/studenci">Studenci</Link>
          </li>
          <li>
            <Link to="/student-manager">Student Manager</Link>
          </li>
          <li>
            <Link to="/licznik-effect">Licznik Effect</Link>
          </li>
          <li>
            <Link to="/tytul">Tytuł</Link>
          </li>
          <li>
            <Link to="/odliczanie">Odliczanie</Link>
          </li>
          <li>
            <Link to="/komentarz">Komentarz</Link>
          </li>
          <li>
            <Link to="/komentarze">Komentarze</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}