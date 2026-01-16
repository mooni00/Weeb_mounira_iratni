import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Login from './pages/login';
import Header from './Components/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;