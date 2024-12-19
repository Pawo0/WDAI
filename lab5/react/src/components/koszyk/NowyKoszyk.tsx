import Product from "./Produkt.tsx";
const products: string[] = [
  "Pietruszka",
  "Chleb",
  "Mleczkooooo",
  "Jogurt",
  "Ser",
];

export default function Koszyk() {
  return (
    <>
      {products.map((product) => (
        <Product name={product} />
      ))}
    </>
  );
}
