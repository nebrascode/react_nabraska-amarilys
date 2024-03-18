import  { useState } from 'react';

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? 'Sudah ditekan' : 'Tekan Tombol'}
    </button>
  );
}

export default Button;
