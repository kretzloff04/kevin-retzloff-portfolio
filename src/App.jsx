import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import './App.css'

import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/experience">Experience</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App
