import React from "react";


function Estudios(){
    return(
        <section class="content__page content__resume">

        <header class="resume__header">
            <h1 class="resume__title">Estudios</h1>
        </header>

        <div class="resume__container">
            
            <section class="resume__left">
                <header class="resume__subheader">
                    <h2 class="resume__subtitle">Formación</h2>
                </header>

                <div class="resume__timelines">
                    <article class="timelines__timeline">
                        <header class="timeline__header">
                            <h4 class="timeline__year">2023</h4>
                            <span class="timeline__company">Inacap</span>
                        </header>

                        <div class="timeline__divider"></div>

                        <div class="timeline__description">
                            <h3 class="timeline__title">Desarrollo Web</h3>
                            <p class="timeline__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id incidunt tempore quidem, quam.
                            </p>
                        </div>

                    </article>


                    <article class="timelines__timeline">
                        <header class="timeline__header">
                            <h4 class="timeline__year">2023</h4>
                            <span class="timeline__company">Inacap</span>
                        </header>

                        <div class="timeline__divider"></div>
                        
                        <div class="timeline__description">
                            <h3 class="timeline__title">Desarrollo Web</h3>
                            <p class="timeline__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id incidunt tempore quidem, quam.
                            </p>
                        </div>
                    </article>
                </div>

                <header class="resume__subheader">
                    <h2 class="resume__subtitle">Experiencia</h2>
                </header>

                <div class="resume__timelines">
                    <article class="timelines__timeline">
                        <header class="timeline__header">
                            <h4 class="timeline__year">2023</h4>
                            <span class="timeline__company">Inacap</span>
                        </header>

                        <div class="timeline__divider"></div>

                        <div class="timeline__description">
                            <h3 class="timeline__title">Desarrollo Web</h3>
                            <p class="timeline__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id incidunt tempore quidem, quam.
                            </p>
                        </div>

                    </article>


                    <article class="timelines__timeline">
                        <header class="timeline__header">
                            <h4 class="timeline__year">2023</h4>
                            <span class="timeline__company">Inacap</span>
                        </header>

                        <div class="timeline__divider"></div>
                        
                        <div class="timeline__description">
                            <h3 class="timeline__title">Desarrollo Web</h3>
                            <p class="timeline__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id incidunt tempore quidem, quam.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section class="resume__right">
                <header class="resume__subheader">
                    <h2 class="resume__subtitle">Habilidades de <span class="title__color">Programación</span></h2>
                </header>

                <div class="resume__skills">
                    <article class="skills__title">
                        <h4 class="skills__text">CSS3 y HTML</h4>
                        <span class="skills__number">90%</span>
                    </article>

                    <div class="skills__progressbar">
                        <div class="skills__percentage skills__percentage--b1"></div>
                    </div>

                    <article class="skills__title">
                        <h4 class="skills__text">JS</h4>
                        <span class="skills__number">90%</span>
                    </article>

                    <div class="skills__progressbar">
                        <div class="skills__percentage skills__percentage--b2"></div>
                    </div>

                    <article class="skills__title">
                        <h4 class="skills__text">Python</h4>
                        <span class="skills__number">90%</span>
                    </article>

                    <div class="skills__progressbar">
                        <div class="skills__percentage skills__percentage--b3"></div>
                    </div>

                    <article class="skills__title">
                        <h4 class="skills__text">SQL Server</h4>
                        <span class="skills__number">90%</span>
                    </article>

                    <div class="skills__progressbar">
                        <div class="skills__percentage skills__percentage--b4"></div>
                    </div>

                    <article class="skills__title">
                        <h4 class="skills__text">React JS</h4>
                        <span class="skills__number">90%</span>
                    </article>

                    <div class="skills__progressbar">
                        <div class="skills__percentage skills__percentage--b5"></div>
                    </div>
                </div>

            </section>
        </div>
    </section>
    );
}

export default Estudios;