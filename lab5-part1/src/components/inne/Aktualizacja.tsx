import { useState } from "react";

export default function Aktualizacja() {
  const [produkt, setProdukt] = useState({
    nazwa: "Pomidor",
    cena: 50,
  });

  const hangePrice = () => {
    setProdukt((prev) => ({
      ...prev,
      cena: 100,
    }));
  };

  return (
    <>
      <div>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
      </div>
      <button onClick={hangePrice}>Zmien cene</button>
    </>
  );
}
