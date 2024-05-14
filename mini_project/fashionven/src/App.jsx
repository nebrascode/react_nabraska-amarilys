import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/user/login"
import Dashboard from './pages/user/dashboard';
import DataBrg from './pages/user/dataBrg'
import BrgKeluar from './pages/user/barangKeluar';
import BrgMasuk from './pages/user/barangMasuk';
import TambahBrg from './pages/user/tambahBrg';
import UpdatePages from './pages/user/updateBrg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/data-barang' element={<DataBrg/>}></Route>
        <Route path='/data-barang/:id' element={<UpdatePages/>}></Route>
        <Route path='/barang-masuk' element={<BrgMasuk/>}></Route>
        <Route path='/barang-keluar' element={<BrgKeluar/>}></Route>
        <Route path='/form-barang' element={<TambahBrg/>}></Route>
        <Route path='/form-barang-masuk' element={<BrgMasuk/>}></Route>
        <Route path='/form-barang-keluar' element={<BrgKeluar/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
