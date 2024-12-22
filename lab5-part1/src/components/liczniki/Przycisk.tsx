export default function Przycisk(props: { handleClick: () => void }) {
  return (
    <>
      <button onClick={props.handleClick}>Dodaj</button>
    </>
  );
}
