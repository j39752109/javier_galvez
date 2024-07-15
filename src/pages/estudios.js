import React from "react";


function Estudios(){
    return(
        <section className="content__page content__resume">

        <header className="resume__header">
            <h1 className="resume__title">Estudios</h1>
        </header>

        <div className="resume__container">
            
            <section className="resume__left">
                <header className="resume__subheader">
                    <h2 className="resume__subtitle">Formación</h2>
                </header>

                <div className="resume__timelines">
                    <article className="timelines__timeline">
                        <header className="timeline__header">
                            <h4 className="timeline__year">2023</h4>
                            <span className="timeline__company">Inacap</span>
                        </header>

                        <div className="timeline__divider"></div>

                        <div className="timeline__description">
                            <h3 className="timeline__title">Desarrollo Web</h3>
                            <p className="timeline__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id incidunt tempore quidem, quam.
                            </p>
                        </div>

                    </article>


                    <article className="timelines__timeline">
                        <header className="timeline__header">
                            <h4 className="timeline__year">2023</h4>
                            <span className="timeline__company">Inacap</span>
                        </header>

                        <div className="timeline__divider"></div>
                        
                        <div className="timeline__description">
                            <h3 className="timeline__title">Desarrollo Web</h3>
                            <p className="timeline__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id incidunt tempore quidem, quam.
                            </p>
                        </div>
                    </article>
                </div>

                <header className="resume__subheader">
                    <h2 className="resume__subtitle">Experiencia</h2>
                </header>

                <div className="resume__timelines">
                    <article className="timelines__timeline">
                        <header className="timeline__header">
                            <h4 className="timeline__year">2023</h4>
                            <span className="timeline__company">Inacap</span>
                        </header>

                        <div className="timeline__divider"></div>

                        <div className="timeline__description">
                            <h3 className="timeline__title">Desarrollo Web</h3>
                            <p className="timeline__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id incidunt tempore quidem, quam.
                            </p>
                        </div>

                    </article>


                    <article className="timelines__timeline">
                        <header className="timeline__header">
                            <h4 className="timeline__year">2023</h4>
                            <span className="timeline__company">Inacap</span>
                        </header>

                        <div className="timeline__divider"></div>
                        
                        <div className="timeline__description">
                            <h3 className="timeline__title">Desarrollo Web</h3>
                            <p className="timeline__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id incidunt tempore quidem, quam.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="resume__right">
                <header className="resume__subheader">
                    <h2 className="resume__subtitle">Habilidades de <span className="title__color">Programación</span></h2>
                </header>

                <div className="resume__skills">
                    <article className="skills__title">
                        <h4 className="skills__text">CSS3 y HTML</h4>
                        <span className="skills__number">90%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b1"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">JS</h4>
                        <span className="skills__number">90%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b2"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">Python</h4>
                        <span className="skills__number">90%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b3"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">SQL Server</h4>
                        <span className="skills__number">90%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b4"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">React JS</h4>
                        <span className="skills__number">90%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b5"></div>
                    </div>
                </div>

            </section>
        </div>
    </section>
    );
}

export default Estudios;