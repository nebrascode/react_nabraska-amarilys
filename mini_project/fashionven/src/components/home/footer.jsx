/* eslint-disable react/no-unknown-property */
export default function Footer() {
    return (
        <footer>
            <div className="w-full py-6 lg:py-8 px-10">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-4xl text-blue-600 font-extrabold"><i className="fi fi-br-mockup"></i>Fashionven</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 font-bold uppercase ">Our Owner</h2>
                            <ul className="text-gray-500 text-xl flex gap-3">
                                <li>
                                    <a href="https://github.com/nebrascode" className="hover:underline " target="_blank"><i className="fi fi-brands-github"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/enraska/" className="hover:underline" target="_blank"><i className="fi fi-brands-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/nabraska-amarilys-sholikhah-5090b4217/"  target="_blank"><i className="fi fi-brands-linkedin"></i></a>
                                </li>
                            </ul>
                            
                        </div>
                        <div>
                            <h2 className="mb-6 font-bold uppercase">Legal</h2>
                            <ul className="text-gray-500">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-bold uppercase">Adress</h2>
                            <p className="text-gray-500">Kota Yogyakarta,</p>
                            <p className="text-gray-500">Daerah Istimewa Yogyakarta,</p>
                            <p className="text-gray-500">Indonesia</p>
                            <p className="text-gray-500">+62 123456</p>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center text-gray-500">
                    <span className="text-sm sm:text-center">© 2024 <a href="https://alterra.com" className="hover:underline">Nabraska - Alterra</a>. All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>

    )
}