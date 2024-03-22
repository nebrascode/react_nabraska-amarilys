 import React from "react";
 // eslint-disable-next-line react/prop-types
 export default function NavBar({ nama }) {
  return (
    <div>
      <p style={{color:'orange'}}>props dari Appjs = {nama}</p>
      {nama === "John" ? <h2 className="text-red">Hai Kamu Admin John</h2> : <p>Hai {nama}</p>}
    </div>
  );
}
