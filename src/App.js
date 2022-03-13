import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/HomePage/Home';
import Modal from './Components/Pages/HomePage/Modal';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Footer from './Components/Pages/Footer/Footer';
import Header from './Components/Header/Header';
import NotFound from './Components/Pages/NotFound/NotFound';
function App() {
  return (
    <BrowserRouter>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<AboutUs />} />



        <Route path='*'element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
