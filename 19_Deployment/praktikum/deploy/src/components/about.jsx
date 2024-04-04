/* eslint-disable react/no-unknown-property */
export default function About() {
    return (
        <div class="h-full lg:h-screen flex justify-center items-center px-10 md:px-24 xl:px-56 bg-slate-100">
            <div class="container py-10">
                <div class="title">
                    <h1 class="text-5xl lg:text-9xl font-extrabold text-blue-400 opacity-30">About</h1>
                    <h3 class="text-xl font-bold">MyErp is...</h3>
                </div>
                <div class="text-about flex flex-col md:flex-row justify-between items-center sm:flex-none xl:mt-8">
                    <div class="deskripsi-about w-full md:w-6/12 mt-5">
                        <p>Dalam dunia fashion yang dinamis dan kompetitif, adaptasi terhadap perubahan menjadi kunci sukses. Aplikasi ERP (Enterprise Resource Planning) merupakan tonggak utama dalam menjalankan bisnis fashion modern di Indonesia. Dengan fitur-fitur yang disesuaikan, aplikasi ERP membawa transformasi digital yang diperlukan untuk mempercepat pertumbuhan dan efisiensi dalam industri fashion kita.
                        </p> <br />
                        <p>Dengan mengadopsi teknologi ini, perusahaan fashion dapat memperluas jangkauan pasar, meningkatkan efisiensi operasional, dan memperkuat posisi mereka di tengah persaingan yang semakin ketat.</p>
                        <button class="hover:bg-gray-700 text-white font-bold mt-6 md:mt-10 py-2 px-4 border bg-slate-800 rounded-xl block mx-auto md:mx-0">BOOK A DEMO</button>
                    </div>
                    <div class="img-about md:ml-8 mt-8 md:mt-0">
                        <img src="src/assets/diagram-about.svg" alt="" class="w-full" />
                    </div>
                </div>
            </div>
        </div>


    )
}