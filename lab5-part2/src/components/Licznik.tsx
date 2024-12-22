import {useState} from "react";

export default function Licznik() {
  const local = localStorage.getItem("cnt")
  const [licznik, setLicznik] = useState(local ? Number(local) : 0);

  const handleClick = () => {
    setLicznik((prev: number) => {
      localStorage.setItem("cnt", `${prev + 1}`)
      return prev + 1
    });

  };

  return (
    <>
      <div>{licznik}</div>
      <button onClick={handleClick}>Dodaj</button>
    </>
  );
}
