import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


/* PAGES */
import Inicio from './pages/inicio';
import SobreMi from './pages/sobre-mi';
import Estudios from './pages/estudios';
import Contacto from './pages/contacto';
/* FIN PAGES*/

/* IMAGES*/
import profileImage from './assets/img/23.png';

/* FIN IMAGES*/

function App() {
  return (
      <Router>    
    <div className="layout">

    <aside className="layout__aside">
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
              <Link to="/" className="menu__link menu__link--active">
                <i className="menu__icon fa-solid fa-house"></i>
                <span className="menu__overlay">Inicio</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link to="/sobre-mi" className="menu__link">
                <i className="menu__icon fa-solid fa-user"></i>
                <span className="menu__overlay">Sobre mi</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link to="/estudios" className="menu__link">
                <i className="menu__icon fa-solid fa-graduation-cap"></i>
                <span className="menu__overlay">Estudios</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link to="/portafolio" className="menu__link">
                <i className="menu__icon fa-solid fa-briefcase"></i>
                <span className="menu__overlay">Portafolio</span>
              </Link>
            </li>
            <li className="menu__option">
              <Link to="/contacto" className="menu__link">
                <i className="menu__icon fa-solid fa-envelope"></i>
                <span className="menu__overlay">Contacto</span>
              </Link>
            </li>
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
          <button className="user-info__btn">Descargar CV</button>
        </div>
        <footer className="user-info__footer">
          © 2024 Javier Gálvez Web
        </footer>

      </section>
    </aside>

    <div class="layout__menu-toggle">
            <i class="menu-toggle_icon fa-solid fa-bars"></i>
            <i class="menu-toggle_icon fa-solid fa-xmark"></i>
    </div>
    
    <main class="layout__content">
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

export default App;
