 // eslint-disable-next-line react/prop-types
 export function NavBar({ nama }) {
  return (
    <div>
      <p>props dari Appjs = {nama}</p>
      {nama === "John" ? <h2>Hai Kamu Admin John</h2> : <p>Hai {nama}</p>}
    </div>
  );
}
