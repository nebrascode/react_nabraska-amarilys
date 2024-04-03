/* eslint-disable react/no-unknown-property */
export default function Navbar() {
  return (
    <nav class="bg-white">
      <div class="container mx-auto px-2 py-5 flex justify-between items-center">
        <a href="#" class="flex items-center font-bold">
          <span class="ml-2 text-2xl text-blue-600">MyERP</span>
        </a>
        <ul class="flex space-x-8 text-slate-900 items-center">
          <li>
            <a href="#" class="hover:text-gray-500">About</a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-500">Pricing</a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-500">Services</a>
          </li>
          <li>
            <button class="hover:bg-gray-100 text-blue-900 font-bold py-2 px-4 border border-blue-600 rounded-xl">BOOK A DEMO</button>
          </li>
        </ul>
      </div>
    </nav>

  )
}