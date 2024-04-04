/* eslint-disable react/no-unknown-property */
export default function Hero() {
    return (
        <div class="container-fluid px-10 md:px-8 lg:px-16 xl:px-32 py-10">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="w-full md:w-6/12">
                    <div class="container hero-text mx-auto">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl text-gray-400 font-bold">Aplikasi Manajemen</h2>
                        <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold">Inventori Industri Fashion</h2>
                        <p class="text-md lg:text-lg mt-6">Optimalkan efisiensi dan kinerja bisnis mode Anda dengan solusi ERP khusus industri fashion, dirancang untuk memenuhi kebutuhan unik industri mode Indonesia.</p>
                        <div class="mt-10">
                            <button class="hover:bg-gray-700 text-white font-bold py-2 px-5 lg:py-3 lg:px-6 xl:py-4 xl:px-7 w-full md:w-auto border bg-blue-600 rounded-md">
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
                <div class="hero-image w-full md:w-6/12 py-6 md:py-0">
                    <img class="h-auto max-w-full" src="src/assets/hero.png" alt="image hero" />
                </div>
            </div>
        </div>

    )
}