import './App.css'
import { Routes, Route,} from 'react-router-dom'

// components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'



function App() {
  return (
    <div>
      <h1>React Router aula</h1>
      {/*  2 -- React Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 4-   Rotas Dinamicas */}
        <Route path="/products/:id" element={<Product />}/>
        {/* 6 -- Nested Routes */}
        <Route path="/products/:id/info" element={<Info />} />
      </Routes>
    </div>
  )
}

export default App