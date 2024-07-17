import React, { useState } from 'react';
import './App.css';
import './responsive.css';  // Archivo para estilos responsive
import './scroll.css';  // Archivo para estilos responsive
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import pdf from './pdf/cv.pdf'

/* PAGES */
import Inicio from './pages/inicio';
import SobreMi from './pages/sobre-mi';
import Estudios from './pages/estudios';
import Contacto from './pages/contacto';
/* FIN PAGES*/

/* IMAGES*/
import profileImage from './assets/img/23.jpg';

/* FIN IMAGES*/

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Router>    
      <div className="layout">
        <Aside menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
        <div className="layout__menu-toggle" onClick={toggleMenu}>
          <i className={`menu-toggle_icon fa-solid fa-bars ${menuVisible ? 'hidden' : ''}`}></i>
          <i className={`menu-toggle_icon fa-solid fa-xmark ${menuVisible ? '' : 'hidden'}`}></i>
        </div>
        
        <main className="layout__content">
          <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route path='/sobre-mi' element={<SobreMi/>}/>
            <Route path='/estudios' element={<Estudios/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
        </main>
      </div> 
    </Router>
  );
}

const Aside = ({ menuVisible, setMenuVisible }) => {
  const location = useLocation();

  return (
    <aside className={`layout__aside ${menuVisible ? 'layout__aside--visible' : 'layout__aside--hidden'}`}>
      <section className="aside__user-info">
        <div className="user-info__general">
          <div className="user-info__container-image">
            <img src={profileImage} className="user-info__image" alt="foto de perfil de usuario" />
          </div>
          <h2 className="user-info__name">Javier Gálvez</h2>
          <h4 className="user-info__job">Desarrollador Web</h4>
        </div>
        <nav className="layout__menu">
          <ul className="menu__list">
            <li className="menu__option">
              <Link to="/" className={`menu__link ${location.pathname === '/' ? 'menu__link--active' : ''}`} onClick={() => setMenuVisible(false)}>
                <i className="menu__icon fa-solid fa-house"></i>
                <span className="menu__overlay">Inicio</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link to="/sobre-mi" className={`menu__link ${location.pathname === '/sobre-mi' ? 'menu__link--active' : ''}`} onClick={() => setMenuVisible(false)}>
                <i className="menu__icon fa-solid fa-user"></i>
                <span className="menu__overlay">Sobre mi</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link to="/estudios" className={`menu__link ${location.pathname === '/estudios' ? 'menu__link--active' : ''}`} onClick={() => setMenuVisible(false)}>
                <i className="menu__icon fa-solid fa-graduation-cap" ></i>
                <span className="menu__overlay">Estudios</span>
              </Link>
            </li>
            {/* <li className="menu__option">
              <Link to="/portafolio" className="menu__link">
                <i className="menu__icon fa-solid fa-briefcase"></i>
                <span className="menu__overlay">Portafolio</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link to="/contacto" className="menu__link" onClick={() => setMenuVisible(false)}>
                <i className="menu__icon fa-solid fa-envelope"></i>
                <span className="menu__overlay">Contacto</span>
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className="user-info__links">
          <ul className="links__social">
            <li className="social__option">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github social__color"></i>
              </a>
            </li>
            <li className="social__option">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin social__color"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="user-info__buttons">
          <a className="user-info__btn" href={pdf} target='__blank'>Descargar CV</a>
        </div>
      </section>
    </aside>
  );
};

export default App;
