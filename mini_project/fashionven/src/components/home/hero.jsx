/* eslint-disable react/no-unknown-property */
import heroImg from "../../assets/hero.png"
export default function Hero() {
    return (
        <div className="container-fluid px-10 md:px-8 lg:px-16 xl:px-32 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-6/12">
                    <div className="container hero-text mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary font-bold">Aplikasi Manajemen</h2>
                        <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold">Inventori Perusahaan Fashion</h2>
                        <p className="text-md mt-6 text-gray-500">Solusi inovatif untuk manajemen inventori perusahaan fashion Anda. Cek stok, tambah produk, atau update info barang dalam sekejap!</p>
                        <div className="mt-10">
                            <button className="hover:bg-gray-700 text-white font-bold py-2 px-5 lg:py-3 lg:px-6 xl:py-3 xl:px-7 w-full md:w-auto border bg-blue-600 rounded-md">
                               BOOK A DEMO
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hero-image w-full md:w-6/12 py-6 md:py-0">
                    <img className="h-auto max-w-full" src={heroImg} alt="image hero" />
                </div>
            </div>
        </div>

    )
}