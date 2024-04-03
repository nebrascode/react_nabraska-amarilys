/* eslint-disable react/no-unknown-property */
export default function Services() {
    return (
        <div class="px-56">
            <div class="title">
                <h1 class="text-7xl font-extrabold text-blue-400 opacity-30">
                    Services
                </h1>
                <h3 class="text-xl font-bold">What Can I Do</h3>
            </div>

            <section className="bg-white pb-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Manajemen Persediaan</h3>
                            <p>
                                Kami hadir untuk mengoptimalkan proses produksi dan distribusi dan meningkatkan efisiensi.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">User Experience</h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas aspernatur blandit
                                tempus porttitor maxime.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Konsultasi Bisnis</h3>
                            <p>
                            Melalui sesi konsultasi bisnis yang personal, kami membantu Anda mengatasi permasalahan inventori.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Logistik Global</h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas aspernatur blandit
                                tempus porttitor maxime.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Penyimpanan dan Distribusi</h3>
                            <p>
                                Dengan infrastruktur logistik yang canggih, kami memastikan produk Anda mencapai tujuan dengan cepat dan tepat waktu, di mana pun itu.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Manajemen Rantai Pasokan</h3>
                            <div> Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware"> Good Ware </a> from <a href="https://www.flaticon.com/"/></div>
                            <p>
                            Kami menyediakan solusi untuk mengelola setiap tahap dari produksi hingga pengiriman.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
