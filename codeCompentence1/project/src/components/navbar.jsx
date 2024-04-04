/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom"
export default function Navbar() {

  const navigate = useNavigate();
  return (
    <nav class="bg-white sticky top-0 mb-3">
      <div class="container mx-auto px-2 py-5 flex justify-between items-center">
        <a onClick={()=> navigate('/')} class="flex items-center font-bold">
          <span class="ml-2 text-2xl text-blue-600"><i class="fi fi-br-mockup"></i>MyERP</span>
        </a>
        <ul class="flex space-x-8 text-slate-900 items-center">
          <li>
            <a onClick={()=> navigate('/about')} class="hover:text-gray-500">About</a>
          </li>
          <li>
            <a href="#price" class="hover:text-gray-500">Pricing</a>
          </li>
          <li>
            <a href="#services" class="hover:text-gray-500">Services</a>
          </li>
          <li>
            <button class="hover:bg-gray-100 text-blue-900 font-bold py-2 px-4 border border-blue-600 rounded-xl">BOOK A DEMO</button>
          </li>
        </ul>
      </div>
    </nav>

  )
}