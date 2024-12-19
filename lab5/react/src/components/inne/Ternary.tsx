export default function Ternary() {
  let a = true;
  let b = false;
  return (
    <>
      <div>Stwierdzenie a jest {a ? "prawdziwe" : "falszywe"}</div>
      <div>Stwierdzenie b jest {b ? "prawdziwe" : "falszywe"}</div>
    </>
  );
}
