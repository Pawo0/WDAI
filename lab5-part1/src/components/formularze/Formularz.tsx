import React, { useState } from "react";

export default function Formularz() {
  const [text, setText] = useState("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <div>{text}</div>
    </>
  );
}
