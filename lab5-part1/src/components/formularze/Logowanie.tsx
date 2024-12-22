import React, { useState } from "react";

export default function Logowanie() {
  const [login, setLogin] = useState("");
  const [passOne, setPassOne] = useState("");
  const [passTwo, setPassTwo] = useState("");
  const filledInputs: boolean =
    passOne !== "" && passTwo !== "" && login !== "";
  const passMatch: boolean = passOne === passTwo;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPass: (value: string) => void,
  ) => {
    setPass(e.target.value);
  };

  const handleLogin = () => {
    window.alert(
      passMatch && filledInputs
        ? "Zalogowano poprawnie"
        : "Hasła nie są zgodne",
    );
  };

  return (
    <>
      <input
        type="text"
        value={login}
        onChange={(e) => handleChange(e, setLogin)}
        placeholder="Login"
      />
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
      <button disabled={!filledInputs} onClick={handleLogin}>
        Logowanie
      </button>
    </>
  );
}
