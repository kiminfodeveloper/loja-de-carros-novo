import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/layout/footer/Footer';
import Navbar from './components/layout/navbar/Navbar';
import About from './pages/About';
import Catalog from './pages/Catalog';
import ContactUs from './pages/ContactUs';
import Details from './pages/Details';
import Financiamento from './pages/Financiamento';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/catalog" element={<Catalog />}>Catalog</Route>
        <Route path="/login" element={<Login />}>Login/Cadastro</Route>
        <Route path="/finan" element={<Financiamento />}>Financiamento</Route>
        <Route path="/contactus" element={<ContactUs />}>Fale conosco</Route>
        <Route path="/detail/:id" element={<Details />}>Detalhes do carro</Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
