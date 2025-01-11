import "../App.css";
import { useState } from "react";
import Balon from "./Balon.tsx";

function Main() {
  const [liczbaBalonow, setLiczbaBalonow] = useState(1);
  const [input, setInput] = useState(1);
  let elements: any = [];
  for (let i = 0; i < liczbaBalonow; i++) {
    elements.push(<Balon />);
  }

  const handleChange = (e: any) => {
    console.log(input)
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setLiczbaBalonow((prev) => {
      console.log(prev + Number(input))
      return prev + Number(input)
    });
  };

  return (
    <>
      {elements}
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <input value={input} onChange={handleChange} />
        <button onClick={handleSubmit}>DODAJ</button>
      </div>
    </>
  );
}

export default Main;
