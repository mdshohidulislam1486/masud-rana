import './App.css';
import { Box } from '@mui/material';
import Layout from './Pages/Home/Home';
import Home from './Pages/Home/Home';
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/main.scss';
import Contact from './Pages/contact';
import Experience from './Pages/Experience/Experience';
import Services from './Pages/Services/Services';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/Experties" element={<Experience />} />
        <Route path="/about" element={<Services />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
