/* eslint-disable react/no-unknown-property */
export default function Footer() {
    return (
        <footer>
            <div class="w-full py-6 lg:py-8 px-10">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <h2 class="text-4xl text-blue-600 font-extrabold"><i class="fi fi-br-mockup"></i>MyERP</h2>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 font-bold uppercase ">Our Owner</h2>
                            <ul class="text-gray-500 text-xl flex gap-3">
                                <li>
                                    <a href="https://github.com/nebrascode" class="hover:underline " target="_blank"><i class="fi fi-brands-github"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/enraska/" class="hover:underline" target="_blank"><i class="fi fi-brands-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/nabraska-amarilys-sholikhah-5090b4217/"  target="_blank"><i class="fi fi-brands-linkedin"></i></a>
                                </li>
                            </ul>
                            
                        </div>
                        <div>
                            <h2 class="mb-6 font-bold uppercase">Legal</h2>
                            <ul class="text-gray-500">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 font-bold uppercase">Adress</h2>
                            <p class="text-gray-500">Kota Yogyakarta,</p>
                            <p class="text-gray-500">Daerah Istimewa Yogyakarta,</p>
                            <p class="text-gray-500">Indonesia</p>
                            <p class="text-gray-500">+62 123456</p>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-center text-gray-500">
                    <span class="text-sm sm:text-center">© 2024 <a href="https://alterra.com" class="hover:underline">Nabraska - Alterra</a>. All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>

    )
}