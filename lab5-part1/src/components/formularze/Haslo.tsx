import React, { useState } from "react";

export default function Haslo() {
  const [passOne, setPassOne] = useState("");
  const [passTwo, setPassTwo] = useState("");
  const emptyInputs = !passOne && !passTwo;
  const passMatch = passOne === passTwo;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPass: (value: string) => void,
  ) => {
    setPass(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={passOne}
        onChange={(e) => handleChange(e, setPassOne)}
        placeholder="Password"
      />
      <input
        type="text"
        value={passTwo}
        onChange={(e) => handleChange(e, setPassTwo)}
        placeholder="Repeat password"
      />
      <div>
        {emptyInputs
          ? "Prosze wprowadzic haslo"
          : !passMatch
            ? "Hasla nie sa zgodne"
            : ""}
      </div>
    </>
  );
}
