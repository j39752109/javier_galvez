import React from "react";

function SobreMi(){
    return(
        <section class="content__page content__about">

        <header class="about__header">
            <h2 class="about__title">Sobre <span class="title__color">Mi</span></h2>
        </header>

        <section class="about__personal-info">
            <article class="about__personal-bio">
                <p class="personal-info__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam unde dolor saepe deleniti totam possimus exercitationem molestias ducimus fuga labore aliquid impedit, nihil architecto dolores esse eaque! Maiores, impedit?
                </p>
            </article>

            <div class="personal-info__data">
                <ul class="personal-info__list">
                    <li class="personal-info__option">
                        <span class="personal-info__title">Edad</span>
                        <span class="personal-info__value">10</span>
                    </li>

                    <li class="personal-info__option">
                        <span class="personal-info__title">Pais</span>
                        <span class="personal-info__value">Chile</span>
                    </li>

                    <li class="personal-info__option">
                        <span class="personal-info__title">Dirección</span>
                        <span class="personal-info__value">Calle falsa 123, xd</span>
                    </li>

                    <li class="personal-info__option">
                        <span class="personal-info__title">Correo</span>
                        <span class="personal-info__value">Correo@correo.com</span>
                    </li>

                    <li class="personal-info__option">
                        <span class="personal-info__title">Telefono</span>
                        <span class="personal-info__value">+569 9999 9999</span>
                    </li>
                </ul>
            </div>
        </section>

        <section class="about__services">
            <header class="services__header">
                <h3 class="about__subtitle">
                    Lo que <span class="title__color">hago</span> 
                </h3>
            </header>

            <div class="servicios__container">
                <article class="services__service">
                    <div class="service__icon">
                        <i class="service_icons fa-solid fa-code"></i>
                    </div>

                    <div class="service__contenet">
                        <h4 class="service__title">Programación</h4>
                        <p class="service__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum sapiente labore laboriosam non pariatur perferendis tenetur, consequuntur consequatur aliquam harum aut dolor, ex natus? Voluptate totam vero assumenda deleniti?
                        </p>
                    </div>

                </article>

                <article class="services__service">
                    <div class="service__icon">
                        <i class="service_icons fa-solid fa-chalkboard-user"></i>
                    </div>

                    <div class="service__contenet">
                        <h4 class="service__title">Formación</h4>
                        <p class="service__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum sapiente labore laboriosam non pariatur perferendis tenetur, consequuntur consequatur aliquam harum aut dolor, ex natus? Voluptate totam vero assumenda deleniti?
                        </p>
                    </div>
                </article>

                <article class="services__service">
                    <div class="service__icon">
                        <i class="service_icons fa-solid fa-computer"></i>
                    </div>

                    <div class="service__contenet">
                        <h4 class="service__title">Desarrollo Web</h4>
                        <p class="service__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum sapiente labore laboriosam non pariatur perferendis tenetur, consequuntur consequatur aliquam harum aut dolor, ex natus? Voluptate totam vero assumenda deleniti?
                        </p>
                    </div>
                </article>

                <article class="services__service">
                    <div class="service__icon">
                        <i class="service_icons fa-solid fa-terminal"></i>
                    </div>

                    <div class="service__contenet">
                        <h4 class="service__title">Administración</h4>
                        <p class="service__description">
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