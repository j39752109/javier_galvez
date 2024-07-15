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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam unde dolor saepe deleniti totam possimus exercitationem molestias ducimus fuga labore aliquid impedit, nihil architecto dolores esse eaque! Maiores, impedit?
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
                        <span className="personal-info__title">Telefono</span>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum sapiente labore laboriosam non pariatur perferendis tenetur, consequuntur consequatur aliquam harum aut dolor, ex natus? Voluptate totam vero assumenda deleniti?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum sapiente labore laboriosam non pariatur perferendis tenetur, consequuntur consequatur aliquam harum aut dolor, ex natus? Voluptate totam vero assumenda deleniti?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum sapiente labore laboriosam non pariatur perferendis tenetur, consequuntur consequatur aliquam harum aut dolor, ex natus? Voluptate totam vero assumenda deleniti?
                        </p>
                    </div>
                </article>

                <article className="services__service">
                    <div className="service__icon">
                        <i className="service_icons fa-solid fa-terminal"></i>
                    </div>

                    <div className="service__contenet">
                        <h4 className="service__title">Administración</h4>
                        <p className="service__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum sapiente labore laboriosam non pariatur perferendis tenetur, consequuntur consequatur aliquam harum aut dolor, ex natus? Voluptate totam vero assumenda deleniti?
                        </p>
                    </div>
                </article>

            </div>

        </section>
        
    </section>
    );
}

export default SobreMi;