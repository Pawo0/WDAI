import { useEffect, useState } from "react";

export default function Odliczanie() {
  const [licznik, setLicznik] = useState(15);
  const [isClicked, setIsClicked] = useState(false);
  let intervalId: number | undefined;

  useEffect(() => {
    if (licznik <= 0) setIsClicked(false);
  }, [licznik]);

  useEffect(() => {
    if (isClicked) {
      intervalId = setInterval(() => {
        setLicznik((prev) => prev - 0.1);
      }, 100);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <div>{licznik >= 0 ? licznik.toFixed(1) : 0}</div>
      <button onClick={handleClick} disabled={licznik <= 0}>
        {licznik <= 0 ? "Odliczanie zakonczone" : isClicked ? "START" : "STOP"}
      </button>
    </>
  );
}
