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
                            <h4 className="timeline__year">2022-2023</h4>
                            {/* <span className="timeline__company">Inacap</span> */}
                        </header>

                        <div className="timeline__divider"></div>

                        <div className="timeline__description">
                            <h3 className="timeline__title">Inacap Santiago Sur</h3>
                            <p className="timeline__text">
                                Titulado en Analista Programador
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
                            {/* <h4 className="timeline__year"></h4> */}
                            <span className="timeline__company__1">Empresa ODIS</span>
                        </header>

                        <div className="timeline__divider"></div>

                        <div className="timeline__description">
                            <h3 className="timeline__title">Pasantía</h3>
                            <p className="timeline__text">
                                Apoyo con el WMS Block para inyectar datos faltantes o con errores para la preparación de pedidos, con el uso de la base de datos de producción SQLServer se realizaba el insert-update-delete dependiendo del caso para que los pedidos llegaran hacer enviados.
                            </p>
                        </div>

                    </article>


                    <article className="timelines__timeline">
                        <header className="timeline__header">
                            {/* <h4 className="timeline__year"></h4> */}
                            <span className="timeline__company__1">Empresa ItRedSpa</span>
                        </header>

                        <div className="timeline__divider"></div>
                        
                        <div className="timeline__description">
                            <h3 className="timeline__title">Práctica</h3>
                            <h5 className="timeline_fecha">02/05/2024 - 08/07/2024</h5>
                            <p className="timeline__text">
                                Con PHP-CSS3-JS se me asigno el módulo para la creación de menú tipo Navbar que son creados dinámicamente con formularios para añadir, editar , guardar o eliminar. El botón del Navbar tiene la opción de añadirle un Submenú para tener más opciones de navegación.                            
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
                        <span className="skills__number">83%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b1"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">JS</h4>
                        <span className="skills__number">74%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b2"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">Python</h4>
                        <span className="skills__number">62%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b3"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">SQL Server</h4>
                        <span className="skills__number">70%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b4"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">MySQl</h4>
                        <span className="skills__number">89%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b7"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">React JS</h4>
                        <span className="skills__number">50%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b5"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">Python - Flask</h4>
                        <span className="skills__number">60%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b6"></div>
                    </div>

                    <article className="skills__title">
                        <h4 className="skills__text">PHP</h4>
                        <span className="skills__number">38%</span>
                    </article>

                    <div className="skills__progressbar">
                        <div className="skills__percentage skills__percentage--b8"></div>
                    </div>
                </div>

            </section>
        </div>

    </section>
    );
}

export default Estudios;