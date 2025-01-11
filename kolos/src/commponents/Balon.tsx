import BalonImage from "../assets/balon.png";
import {CSSProperties, useEffect, useState} from "react";

export default function Balon() {
  const randScale = Math.random() + 0.5;
  const randPositionX = Math.random() * (70 - 20) + 20;
  const randPositionY = Math.random() * (70 - 20) + 20;
  const [scale, setScale] = useState(randScale);
  const [positions, setPositions] = useState({
    x: randPositionX,
    y: randPositionY,
  });
  const balonStyle: CSSProperties = {
    transform: `scale(${scale})`,
    position: "absolute",
    top: positions.y + "%",
    left: positions.x + "%",
    width: "100px",
    transition: "top 5s",
    cursor: "pointer"
  };

  const handleClick = ()=>{
    setScale(prev=> prev - 0.1)
  }

  useEffect(()=>{
    if (scale < 0.5){
      setPositions(prev=>{
        return {
          ...prev,
          y: -200
        }
      })
    }
  },[scale])

  return (
    <>
      <img src={BalonImage} style={balonStyle} onClick={handleClick}/>
    </>
  );
}
