import React from 'react';
import s from './portafolio.module.css'


export default function Portafolio() {
    return (

        <div className={s.portafolio}>
            {/* NAVBAR */}
            <div >
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* PORTADA */}
            <div className={s.portada}>
                <h1>Nehuen Morales</h1>
                <h3>Full-Stack developer</h3>
            </div>
            {/* ACERCA DE MI  */}
            <div>
                <h3>Acerca de mi</h3>
                <p>
                    ¡Hola! Soy Nehuen, un desarrollador web Full-Stack.

                    Dentro de mis aptitudes reconozco que me gusta autosuperarme y estar continuamente aprendiendo, soy curioso y me encanta trabajar en equipo.

                    Mis mayores fortalezas están relacionadas a la comunicación, trabajo en equipo, empatía y perseverancia.

                    Me apasiona la programación y me gusta desempeñarme tanto en el front como en el back.
                </p>
            </div>
            {/* TECNOLOGIAS */}
            <div>
                <h3>Tecnologias</h3>
            </div>
            {/* PROYECTOS */}
            <div>
                <h3>Proyectos</h3>
            </div>
            {/* CONTACTO */}
        </div>
    )
}