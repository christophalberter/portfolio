import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './components/navbar/NavMenu';
import { AboutMe } from './components/layout/about_me/AboutMe';
import { Contact } from './components/layout/contact/Contact';
import { Home } from './components/layout/home/Home';
import { Projects } from './components/layout/projects/Projects';
import { Skills } from './components/layout/skills/Skills';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}
