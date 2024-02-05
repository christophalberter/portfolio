import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './layout/home/Home';
import Contact from './layout/contact/Contact';
import About from './layout/about_me/About';
import Projects from './layout/projects/Projects';
import Nav from './layout/common/navbar/Nav';
import { RouteAboutMe, RouteContact, RouteProjects } from './routes/RouterRoutes';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={RouteContact} element={<Contact />} />
          <Route path={RouteAboutMe} element={<About />} />
          <Route path={RouteProjects} element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
