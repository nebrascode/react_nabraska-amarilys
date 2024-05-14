import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const navigate=useNavigate();
    
    return (
        <div className="sidebar flex flex-col justify-between h-screen w-4/12 md:w-1/4 lg:w-1/6 bg-primary text-white p-4">
            {/* Hamburger Button for Small Screens */}
            <div className="md:hidden mb-0">
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    <i className="fi fi-rr-menu-burger"></i>
                </button>
            </div>

            {/* Sidebar Content */}
            <div className={`md:flex md:flex-col md:justify-start md:h-full md:items-center md:text-left ${isOpen ? 'block' : 'hidden'}`}>
                <div>
                    <div className="flex flex-row justify-between items-center mb-4 p-3 cursor-pointer">
                        <a onClick={() => navigate('/')} className="flex items-center font-bold">
                            <span className="ml-2 text-2xl"><i className="fi fi-br-mockup"></i>Fashionven</span>
                        </a>
                    </div>
                    <ul className="flex flex-col space-y-2 mt-4">
                        <li className="flex items-center p-2 rounded-md hover:bg-secondary hover:cursor-pointer ">
                            <a onClick={() => navigate('/dashboard')}><i className="fi fi-sr-apps"></i> <span className="ml-2">Dashboard</span></a>
                        </li>
                        <li className="flex items-center p-2 rounded-md hover:bg-secondary hover:cursor-pointer">
                            <a onClick={() => navigate('/data-barang')}><i className="fi fi-rr-apps-delete"></i> <span className="ml-2">Data Barang</span></a>
                        </li>
                        <li className="flex items-center p-2 rounded-md hover:bg-secondary hover:cursor-pointer ">
                            <a onClick={() => navigate('/barang-masuk')}> <i className="fi fi-ss-inbox-in"></i><span className="ml-2">Barang Masuk</span></a>
                        </li>
                        <li className="flex items-center p-2 rounded-md hover:bg-secondary hover:cursor-pointer ">
                            <a onClick={() => navigate('/barang-keluar')}> <i className="fi fi-sr-inbox-out"></i><span className="ml-2">Barang Keluar</span></a>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto">
                    <button className="w-full px-3 rounded-md btn bg-white text-primary hover:bg-primary hover:text-white"
                        onClick={() => navigate('/')}>
                        <i className="fi fi-br-sign-out-alt text-2xl"></i><span className="ml-2">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
