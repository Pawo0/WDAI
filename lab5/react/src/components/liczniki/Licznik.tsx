import { useState } from "react";

export default function Licznik() {
  const [licznik, setLicznik] = useState(0);

  const handleClick = () => {
    setLicznik((prev: number) => prev + 1);
  };

  return (
    <>
      <div>{licznik}</div>
      <button onClick={handleClick}>Dodaj</button>
    </>
  );
}
