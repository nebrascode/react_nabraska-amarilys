import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/landingPage'
import CreateProduct from '../src/pages/createProduct'
import DetailProducts from './pages/detailProduct';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/create-product' element={<CreateProduct />} />
      <Route path='/products/:id' element={<DetailProducts />} />
    </Routes>
    </Router>
  )
}

export default App