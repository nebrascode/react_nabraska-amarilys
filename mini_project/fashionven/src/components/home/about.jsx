
export default function About() {
    return (
        <div className="h-full justify-center items-center px-10 md:px-24 bg-slate-100 w-full" id="about">
            <div className="py-6 w-full mx-auto">
                <div className="title">
                    <h1 className="text-5xl lg:text-9xl font-extrabold text-blue-400 opacity-30" id="about">About</h1>
                    <h3 className="text-xl font-bold">What is Fashionven</h3>
                </div>
                <div className="text-about md:flex-row justify-center items-center sm:flex-none xl:mt-8">
                    <div className="deskripsi-about w-full md:w-6/12 mt-5">
                        <p>FashionVen adalah solusi sempurna untuk manajemen inventori perusahaan fashion Anda. Dengan fitur-fitur yang intuitif, Anda dapat dengan mudah melihat data barang, mengelola stok dengan menambah, mengedit, atau menghapus barang, serta melacak barang masuk dan keluar.
                        </p> <br />
                        <p>Dengan FashionVen, manajemen inventori fashion menjadi lebih efisien dan terorganisir, membantu Anda fokus pada pertumbuhan bisnis Anda.</p>
                        <button  className="hover:bg-gray-700 text-white font-bold mt-6 md:mt-10 py-2 px-4 border bg-slate-800 rounded-xl block mx-auto md:mx-0">BOOK A DEMO</button>
                    </div>
                </div>
            </div>
        </div>


    )
}