import { useState, useEffect } from "react";

export default function Licznik() {
  const [licznik, setLicznik] = useState(0);

  const handleClick = () => {
    setLicznik((prev: number) => prev + 1);
  };

  useEffect(() => {
    console.log("Hello World!")
  }, []);

  useEffect(() => {
    console.log(`Licznik zwiekszył sie do ${licznik}`);
  }, [licznik]);

  return (
    <>
      <div>{licznik}</div>
      <button onClick={handleClick}>Dodaj</button>
    </>
  );
}
