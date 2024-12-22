import React, {useEffect, useState} from "react";

export default function Tytul() {
  const [topic, setTopic] = useState("");

  useEffect(() => {
    document.title = topic ? topic : "EMPTY"
  }, [topic]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    setTopic(e.target.value)
  }

  return <input type="text" onChange={handleChange}/>;
}

