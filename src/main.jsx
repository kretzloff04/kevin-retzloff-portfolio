import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import ExpCard from './components/ExpCard.jsx'
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx'
import CourseInfo from './pages/CourseInfo.jsx';
import CourseCard from './components/CourseCard.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectCards from './components/ProjectCards.jsx'
import Projects from './pages/Projects.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>,
)
