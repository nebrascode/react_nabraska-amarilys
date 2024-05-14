import { useEffect, useState } from "react";

function App() {
  const [respond, setRespond] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    // Any logic you want to run on component mount/update
  }, []);

  const API_KEY = "sk-proj-juPOCGIDN3wwQosfKgZ1T3BlbkFJXy0Lo7d9BHYZrreS0F05"; // Replace with your actual API key

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promptAwal =
      "Kamu adalah seorang customer service yang bertugas untuk memberikan informasi kepada user. User bertanya terkait layanan kebersihan yang disediakan oleh perusahaan. Berikut adalah informasi yang bisa saya berikan: ";

    const APIBody = {
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `${promptAwal} + list informasi layanan : {
            'Fitur Layanan' : 'Kami menyediakan 4 layanan kebersihan yaitu, Cleaning House, Cleaning Office and Firma, Cleaning Industry and Fabric, Climbing Window Cleaning',
            'Berapa pekerja' : 'Cleaning House 1-3 orang, Cleaning Office and Firma 3-5 orang, Cleaning Industry and Fabric 5-10 orang, Climbing Window Cleaning 2-3 orang', 
            'Detail Layanan' : 'Cleaning House membersihkan ruangan, mengelola peralatan, hingga detail-detail kecil seperti membersihkan debu, mengaspirasi permukaan, dan menyusun barang-barang. Cleaning Office and Firma membersihkan ruangan kantor, area umum, dapur, dan kamar mandi dengan cermat. Cleaning Industry and Fabric membersihkan area industri dan pabrik, membersihkan mesin, peralatan, dan area produksi. Climbing Window Cleaning membersihkan jendela, kaca, dan area tinggi lainnya'
          } + pertanyaan dari user${prompt}`,
        },
      ],
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify(APIBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      setRespond(data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center p-3 text-green-400">CUSTOMER SERVICE Mr/s. Clean</h1>
      <form onSubmit={handleSubmit}>
        <label className="text-2xl flex justify-center p-2">
          Enter your prompt :{" "}
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br></br>
        <button className="text-medium hover:border-t-emerald-500 m-3" type="submit">
          Send to OpenAI
        </button>
      </form>
      {respond}
    </div>
  );
}

export default App;