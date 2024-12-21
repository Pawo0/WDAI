import './App.css'
import Choinka from "./components/Choinka.tsx";
import {useState} from "react";

function App() {
  const [liczbaChoinek, _] = useState(4)
  const e: any[] = [];
  for (let i = 0; i < liczbaChoinek; i++) {
    e.push(<Choinka cnt={3}/>)
  }
  const [elements, setElements] = useState(e)
  const [inputNumber, setInputNumber] = useState<number>(1)

  const handleClick = () => {
    if (inputNumber > 0) setElements(prevState => [...prevState, <Choinka cnt={Number(inputNumber)}/>])
    else setElements(prevState => [...prevState, <Choinka cnt={1}/>])
    setInputNumber(1)
  }

  const handleChange = (e: any) => {
    setInputNumber(e.target.value)
  }
  return (
    <>
      <div className={"header"}>
        <input type={"number"} value={inputNumber} onChange={handleChange} placeholder={"1"}/>
        <button onClick={handleClick}>Dodaj choinke</button>
      </div>
      <div className={"appMain"}>
        {elements}
      </div>
    </>
  )
}

export default App
