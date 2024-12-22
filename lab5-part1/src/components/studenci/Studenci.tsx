interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

export default function Studenci() {
  const students: Student[] = [
    { imie: "Pawo", nazwisko: "Hehe", rocznik: 2003 },
    { imie: "Aga", nazwisko: "Adamczyk", rocznik: 2012 },
    { imie: "Rafalo", nazwisko: "Trololo", rocznik: 2005 },
  ];

  const studentsElements = students.map(student => (
    <tr>
      <td>{student.imie}</td>
      <td>{student.nazwisko}</td>
      <td>{student.rocznik}</td>
    </tr>
  ))

  return (
    <table>
      {studentsElements}
    </table>
  )
}
