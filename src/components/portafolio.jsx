import React from 'react';
import s from './portafolio.module.css'
import { Image } from '@chakra-ui/react'


export default function Portafolio() {
    return (

        <div >

            {/* PORTADA */}
            <div>
                <div className={s.encabezado}>
                    <h1 className={s.h1}>Nehuen Morales</h1>
                    <h3 className={s.h3} >Full-Stack developer</h3>
                </div>
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    src="https://i.ibb.co/Nx5Qgc5/imagen-perfil.jpg"
                    alt='img'
                />

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