import {useEffect, useState} from "react";

interface ChoinkaSets {
  size: number;
  id: number;
}


export default function Choinka(props: any) {
  const [height, setHeight] = useState<number>(props.cnt)
  let elements: ChoinkaSets[] = [];
  for (let i = 0; i < height; i++) {
    elements.push({size: 100 - i * 5, id: i})
  }
  const choinkaElement = elements.map(el => (
    <div key={el.id} className={"block"} style={{width:el.size}}>
      <div
        className={"triangle"}
        style={{
          borderLeft: `${el.size/2}px solid transparent`,
          borderRight: `${el.size/2}px solid transparent`
      }}
      ></div>
    </div>
  ))
  choinkaElement.reverse()

  const handleClick = (by: number) => {
    if (height + by > 0) setHeight(prev => prev + by)
    console.log(height + by)
  }

  const [menuColor, setMenuColor] = useState("white")

  useEffect(()=>{
    fetch("http://localhost:3000/kolor")
      .then(res => res.json())
      .then(data => setMenuColor(data.kolor))
  },[])
  return (
    <div className={"main"}>
      <div className={"menu"} style={{backgroundColor:menuColor}}>
        <button  onClick={() => handleClick(1)}>+</button>
        <button  onClick={() => handleClick(-1)}>-</button>
      </div>
      {choinkaElement}
    </div>
  )
}