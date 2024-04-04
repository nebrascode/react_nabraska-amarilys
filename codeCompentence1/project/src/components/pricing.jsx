/* eslint-disable react/no-unknown-property */
export default function Price() {
    return (
        <section class="px-10 md:px-24 xl:px-56 py-32 sm:h-full bg-blue-50" id="price" >
            <h1 class="text-5xl lg:text-9xl font-extrabold text-blue-400 opacity-30 md:text-md xs:mt-96">
                Price
            </h1>
            <div class="container mx-auto mt-8">
                <div class="flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
                    <div class="flex-1 border-gray-300 bg-slate-50 border-2 rounded-lg p-6 text-center space-y-4">
                        <h3 class="text-2xl font-heading font-semibold">1 bulan</h3>
                        <p class="text-2xl font-bold text-blue-600">Rp 50.000</p>
                        <ul class="space-y-2">
                            <li>Langganan 30 hari</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Try</button>
                    </div>
                    <div class="flex-1 border-gray-300 bg-slate-50 border-2 rounded-lg p-6 text-center space-y-4 mt-8 sm:mt-0">
                        <h3 class="text-2xl font-heading font-semibold">3 Bulan</h3>
                        <p class="text-2xl font-bold text-blue-600">Rp 100.000</p>
                        <ul class="space-y-2">
                            <li>Langganan 3 bulan penuh</li>
                            <li>Kategori tanpa batas</li>
                            <li>Gratis konsultasi</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">GET NOW</button>
                    </div>
                    <div class="flex-1 border-gray-300 bg-slate-50 border-2 rounded-lg p-6 text-center space-y-4 mt-8 sm:mt-0">
                        <h3 class="text-2xl font-heading font-semibold">1 Tahun</h3>
                        <p class="text-2xl font-bold text-blue-600">Rp 450.000</p>
                        <ul class="space-y-2">
                            <li>Akses semua fitur dalam 1 tahun!</li>
                        </ul>
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Try</button>
                    </div>
                </div>
            </div>
        </section>

    )
}