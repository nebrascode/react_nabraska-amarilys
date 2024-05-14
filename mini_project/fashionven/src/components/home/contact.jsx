import { useState } from 'react';
import msg from '../../assets/msg.png'

export default function Contact() {
    const [ userInput, setUserInput ] = useState("");
    const [ respond, setRespond ] = useState("");

    const API_KEY = import.meta.env.API_KEY;

    const handleSubmit = async (e) => {
        //menyambungkan ke Open ai dan memasukkan prompt
        e.preventDefault();
        const promptAwal =
            "kamu adalah seorang customer service pada layanan aplikasi inventori barang sederhana untuk pemilik usaha fashion. Kamu memiliki sifat yang ramah dalam membantu user menggunakan aplikasi Fashionven.";

        // settings
        const APIBody = {
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: `${promptAwal} + list informasi layanan : {
                        'Fitur Layanan' : 'Kami menyediakan layanan seperti manajemen barang, dan manajemen transaksi barang yang keluar dan barang masuk.',
                        'Cara pemakaian': 'login sebagai user dengan memasukkan email dan password, setelah itu terdapat menu untuk mengelola persediaan barang, melihat data barang, dan melihat transaksi barang keluar dan masuk'
                      } + pertanyaan dari user ${userInput}`,
                },
            ],
        };

        try {
            //pemanggilan data
            const response = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                    method: "POST", //mengirimkan data
                    headers: {
                        //meminta izin OPEN AI
                        "Content-Type": "application/json", //tipe data
                        Authorization: "Bearer " + API_KEY, //izin token
                    },
                    body: JSON.stringify(APIBody), // memasukkan data, didalam body itu berupa string makanya stringify
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch");
            }

            const data = await response.json();
            console.log(data);
            setRespond(data.choices[ 0 ].message.content);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return (
        <section className="bg-primary py-14 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <img src={msg} alt="image" className="h-32" />
                    <h2 className="text-4xl font-bold text-white mt-3">Customer Service</h2>
                    <p className="text-white text-md mt-4">Jangan lewatkan kesempatan untuk bertanya langsung pada customer kami.</p>
                </div>

                <form className="w-8/12 mt-8 mx-auto" onSubmit={handleSubmit}>
                    <div className="flex items-center max-w-full mx-auto">
                        <input
                            type="text"
                            placeholder="Masukkan pertanyaan"
                            onChange={(e) => setUserInput(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <button type="submit"
                            className="ml-4 px-4 py-2 rounded-md border text-white hover:bg-blue-600"
                        >kirim</button>
                    </div>
                </form>
                <div className="container mx-auto w-6/12 mt-5">
                    <p className='text-sm text-gray-700 px-4 py-2 rounded-md bg-secondary shadow-lg'>{respond}</p>
                </div>
            </div>
        </section>
    );
}
