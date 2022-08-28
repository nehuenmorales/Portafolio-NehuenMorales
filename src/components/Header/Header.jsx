import React from 'react';
import s from './portafolio.module.css'
import { Image, Divider, Heading, Text, Box, Flex } from '@chakra-ui/react'


export default function Header() {
    return (
        <div className={s.container} >
            {/* PORTADA */}
            <div className={s.portada}>
                <div className={s.encabezado}>
                    <h1 className={s.h1}>Nehuen Morales</h1>
                    <Divider orientation='horizontal' />
                    <h3 className={s.h3} >Full-Stack developer</h3>
                </div>
                <Image
                    borderRadius='full'
                    boxSize='250px'
                    src="https://i.ibb.co/Nx5Qgc5/imagen-perfil.jpg"
                    alt='img'
                />

            </div>
            <Divider orientation='horizontal' />
        </div>
    )
}