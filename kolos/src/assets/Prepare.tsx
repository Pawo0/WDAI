import { CSSProperties, useEffect, useState } from "react";

function Prepare() {
  const [iteration, setIteration] = useState(0);
  const [windowDimension, setWindowDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const colors: string[] = ["red", "green", "blue"];
  const positions = [
    ["0", "0"],
    ["0", windowDimension.width - 100 + "px"],
    [windowDimension.height - 100 + "px", windowDimension.width - 100 + "px"],
    [windowDimension.height - 100 + "px", "0"],
  ];

  useEffect(() => {
    const handleResize = () =>{
      setWindowDimension({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const buttonStyle: CSSProperties = {
    fontSize: "2rem",
    padding: "20px",
  };

  const flyingBox: CSSProperties = {
    top: positions[iteration % 4][0],
    left: positions[iteration % 4][1],
    position: "absolute",
    width: "100px",
    height: "100px",
    backgroundColor: colors[iteration % 3],
    transition: "top 0.5s, left 0.5s, background-color 1s",
  };

  const handleClick = () => {
    setIteration((prev) => prev + 1);
  };
  return (
    <div style={containerStyle}>
      <div style={flyingBox}></div>
      <button style={buttonStyle} onClick={handleClick}>
        MOVE
      </button>
    </div>
  );
}

export default Prepare;
