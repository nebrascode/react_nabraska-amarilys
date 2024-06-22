import { useState } from 'react'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState(0)
  const [respond, setRespond]=useState()

  function handleChanges(data){
    setUserInput(data.target.value)
  }

  const API_KEY = 'sk-proj-xvlIY5kraF4mDjuQ9waMT3BlbkFJq5VrmTXs3EqeAJGID2yM';
  
  async function handleClick(e){
    console.log(userInput)
    
    // memasukkan prompt
    e.preventDefault();
    const promptAwal =
      'kamu adalah seorang admin penjualan online dengan sifat yang ramah.Tingkatkan interaksi dengan audiens Anda! Ajukan pertanyaan menarik terkait teknologi terbaru, bagikan tips atau trik penggunaan alat elektronik, dan undang mereka untuk berbagi pengalaman mereka dengan produk kami. Bahan-bahan kreatif seperti gambar atau video juga bisa mendukung untuk menarik perhatian mereka. Tawarkan produk terbaik toko kami ';
    // ini adalah cara setting open ai
    const APIBody = {
      model: 'gpt-4',
      messages: [ { role: 'user', content: `${promptAwal} + ${userInput}` } ]
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + API_KEY
        },
        body: JSON.stringify(APIBody)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      console.log(data);

      setRespond(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <>

      <input type='text' id='name' onChange={(data)=>{handleChanges(data)}}/>
      <button type='submit' onClick={handleClick}>submit</button>
      <p>{respond}</p>
    </>
  )
}

export default App
