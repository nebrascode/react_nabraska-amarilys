import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 mb-3">
      <div className="container mx-auto px-2 py-5 flex justify-between items-center">
        <NavLink to="/" className="flex items-center font-bold text-blue-600">
          <span className="ml-2 text-2xl"><i className="fi fi-br-mockup"></i>Fashionven</span>
        </NavLink>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="block text-gray-800 focus:outline-none focus:text-gray-500"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21.003 4H2.997C1.893 4 1 4.897 1 5.999v.002c0 1.104.893 2 1.997 2h18.006c1.104 0 1.997-.896 1.997-2V6c0-1.104-.893-2-1.997-2zM3 8h18a1 1 0 000-2H3a1 1 0 000 2zm18 4H3a1 1 0 000 2h18a1 1 0 000-2zm0 4H3a1 1 0 000 2h18a1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } lg:flex lg:space-x-8 text-primary items-center`}
        >
          <li>
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-200 mr-4">
                        About
                    </a>
          </li>
          <li>
            <a href="#price" className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-200 mr-4">
              Price
            </a>
          </li>
          <li>
          <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-200 mr-4">
                        Services
                    </a>
          </li>
          <li>
            <button
              onClick={() => navigate('/login')}
              className="hover:bg-gray-100 text-blue-900 font-bold py-2 px-4 border border-blue-600 rounded-xl"
            >
              LOGIN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
