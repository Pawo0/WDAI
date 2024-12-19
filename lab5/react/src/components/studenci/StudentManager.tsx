import React, { useState } from "react";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

export default function Studenci() {
  const [students, setStudents] = useState<Student[]>([
    { imie: "Pawo", nazwisko: "Hehe", rocznik: 2003 },
    { imie: "Aga", nazwisko: "Adamczyk", rocznik: 2012 },
    { imie: "Rafalo", nazwisko: "Trololo", rocznik: 2005 },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputYear, setInputYear] = useState("");

  const studentsElements = students.map((student) => (
    <tr>
      <td>{student.imie}</td>
      <td>{student.nazwisko}</td>
      <td>{student.rocznik}</td>
    </tr>
  ));

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const newName = inputName
    const newSurname = inputSurname
    const newYear: number = Number(inputYear)
    if (newName && newSurname && newYear){
      setInputName("")
      setInputSurname("")
      setInputYear("")
      const newStudent: Student = {
        imie: newName,
        nazwisko: newSurname,
        rocznik: newYear
      }
      setStudents(prev => ([
        ...prev,
        newStudent
      ]))
    }
  };

  const updateInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setInput: (value: string) => void,
  ) => {
    setInput(e.target.value);
  };

  return (
    <>
      <table>{studentsElements}</table>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => updateInput(e, setInputName)}
          placeholder="imie"
        />
        <input
          type="text"
          value={inputSurname}
          onChange={(e) => updateInput(e, setInputSurname)}
          placeholder="nazwisko"
        />
        <input
          type="text"
          value={inputYear}
          onChange={(e) => updateInput(e, setInputYear)}
          placeholder="rocznik"
        />
        <button>add</button>
      </form>
    </>
  );
}
