/* eslint-disable react/no-unknown-property */
export default function Hero() {
    return (
        <div class="container-fluid flex justify-between items-center px-52 h-full py-10">
            <div className=" w-6/12">
                <div class="container hero-text mx-auto">
                    <h2 class="text-3xl text-gray-400 font-bold">Aplikasi Manajemen</h2>
                    <h2 class="text-6xl font-bold">Inventori Industri Fashion</h2>
                    <p class="text-md mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad optio reiciendis illo non doloremque quibusdam consequatur ullam iusto dolores quos!</p>
                </div>

                <div class="mt-10">
                    <button class="hover:bg-gray-700 text-white font-bold py-2 px-5 w-64 border bg-blue-600 rounded-md mr-4">
                        Create Account
                    </button>
                </div>
            </div>
            <div className="hero-image w-6/12 py-6">
                <img class="h-auto max-w-full " src="src/assets/hero.png" alt="image hero" />
            </div>

        </div>
    )
}