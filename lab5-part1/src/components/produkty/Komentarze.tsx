import { useEffect, useState } from "react";
import Komentarz from "./Komentarz.tsx";
import { KomentarzProps } from "./interfaces.ts";

import "./Komentarz.css";

export default function Komentarze() {
  const [komentarzeState, setKomentarzeState] = useState<KomentarzProps[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setKomentarzeState(data.comments);
      });
  }, []);
  const komentarzeElement = komentarzeState.map((el) => (
    <Komentarz
      key={el.id}
      {...el}
    />
  ));
  return <div className={"main"}>{komentarzeElement}</div>;
}
