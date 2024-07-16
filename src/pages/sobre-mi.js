import React from "react";

function SobreMi(){
    return(
        <section className="content__page content__about">

        <header className="about__header">
            <h2 className="about__title">Sobre <span className="title__color">Mi</span></h2>
        </header>

        <section className="about__personal-info">
            <article className="about__personal-bio">
                <p className="personal-info__description">
                Mi nombre es Javier y soy un apasionado del desarrollo web. Desde que empecé mi formación en Inacap, he estado fascinado por cómo la programación puede transformar ideas en realidad. Mi entusiasmo por la tecnología me llevó a seguir aprendiendo de manera autodidacta, explorando nuevas herramientas y lenguajes.
                </p>
            </article>

            <div className="personal-info__data">
                <ul className="personal-info__list">
                    {/* <li className="personal-info__option">
                        <span className="personal-info__title">Edad</span>
                        <span className="personal-info__value">10</span>
                    </li> */}

                    <li className="personal-info__option">
                        <span className="personal-info__title">Pais</span>
                        <span className="personal-info__value">Chile</span>
                    </li>

                    <li className="personal-info__option">
                        <span className="personal-info__title">Dirección</span>
                        <span className="personal-info__value">General Oscar Bonilla, Macul</span>
                    </li>

                    <li className="personal-info__option">
                        <span className="personal-info__title">Correo</span>
                        <span className="personal-info__value">javierfgg.96@gmail.com</span>
                    </li>

                    <li className="personal-info__option">
                        <span className="personal-info__title">Teléfono</span>
                        <span className="personal-info__value">+569 8201 5710</span>
                    </li>
                </ul>
            </div>
        </section>

        <section className="about__services">
    <header className="services__header">
        <h3 className="about__subtitle">
            Lo que <span className="title__color">hago</span> 
        </h3>
    </header>

    <div className="servicios__container">
        <article className="services__service">
            <div className="service__icon">
                <i className="service_icons fa-solid fa-code"></i>
            </div>

            <div className="service__contenet">
                <h4 className="service__title">Programación</h4>
                <p className="service__description">
                    Soy un analista de programación con experiencia en HTML5, CSS3, JavaScript, React JS, Python (Flask), SQL (SQL Server, MySQL) y PHP. He trabajado en desarrollo web responsivo, aplicaciones interactivas, automatización de procesos y gestión de bases de datos. Mi enfoque está en crear soluciones efectivas y eficientes que cumplan con las necesidades del cliente.
                </p>
            </div>
        </article>

        <article className="services__service">
            <div className="service__icon">
                <i className="service_icons fa-solid fa-chalkboard-user"></i>
            </div>

            <div className="service__contenet">
                <h4 className="service__title">Formación</h4>
                <p className="service__description">
                    Me formé en Inacap, donde adquirí una sólida base en desarrollo web y programación. Aprendí SQL para la gestión de bases de datos, programación orientada a objetos en Python, y desarrollo web con React y Django. 
                </p>
            </div>
        </article>

        <article className="services__service">
            <div className="service__icon">
                <i className="service_icons fa-solid fa-computer"></i>
            </div>

            <div className="service__contenet">
                <h4 className="service__title">Desarrollo Web</h4>
                <p className="service__description">
                    Me especializo en el desarrollo web desde el concepto hasta la implementación. Puedo construir sitios web responsivos y aplicaciones web usando HTML, CSS, JavaScript, y frameworks como React JS. Mi objetivo es crear experiencias de usuario intuitivas y funcionales que se adapten a diferentes dispositivos y plataformas.
                </p>
            </div>
        </article>

        <article className="services__service">
            <div className="service__icon">
                <i className="service_icons fa-solid fa-terminal"></i>
            </div>

            <div className="service__contenet">
                <h4 className="service__title">Certificados</h4>
                <p className="service__description">
                    <ul className="service__list">
                        <li className="list">
                            Desarrollador Full Stack.
                        </li>
                        <li className="list">
                            Diseño y gestión de base de datos.
                        </li>
                        <li className="list">
                            Diseño Ágil de sistemas
                        </li>
                        <li className="list">
                            Desarrollo de aplicaciones básicas.
                        </li>
                    </ul>
                </p>
            </div>
        </article>
    </div>
</section>

        
    </section>
    );
}

export default SobreMi;