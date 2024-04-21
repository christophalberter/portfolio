import { BrowserRouter } from 'react-router-dom';

import { AboutMe } from './components/layout/about_me/AboutMe';
import { Contact } from './components/layout/contact/Contact';
import { Home } from './components/layout/home/Home';
import { Projects } from './components/layout/projects/Projects';
import { Skills } from './components/layout/skills/Skills';
import { NavBar } from './components/navbar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
