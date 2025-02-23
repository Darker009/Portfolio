import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Sections/Home/Home';
import Projects from './Sections/Projects/Projects';
import './App.css';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Projects />
      <Skills/>
      <Contact/>
    </Router>
  );
}

export default App;
