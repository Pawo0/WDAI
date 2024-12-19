import { useState } from "react";
import Przycisk from "./Przycisk.tsx";

export default function Licznik() {
  const [licznik, setLicznik] = useState(0);

  const handleClick = () => {
    setLicznik((prev: number) => prev + 1);
  };

  return (
    <>
      <div>{licznik}</div>
      <Przycisk handleClick={handleClick}></Przycisk>
    </>
  );
}
