import './App.css'
import { Routes, Route, Navigate} from 'react-router-dom'

// components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'


function App() {
  return (
    <div>
      <h1>React Router aula</h1>
      {/*  2 -- React Router */}
      <Navbar />
      {/*9 - Search Params  */}
      <SearchForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 4-   Rotas Dinamicas */}
        <Route path="/products/:id" element={<Product />}/>
        {/* 6 -- Nested Routes */}
        <Route path="/products/:id/info" element={<Info />} />
        {/*8 -- No match router pagina 404 */}
        <Route path="*" element={<NotFound />} />
        {/*9 -- Search */}
        <Route path="/search" element={<Search />} />
        {/* Redirect */}
        <Route path="/company" element={<Navigate to="/about" />} />
      </Routes>
    </div>
  )
}

export default App