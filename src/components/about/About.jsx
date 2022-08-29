import React from "react"
import { Image, Divider, Heading, Text, Box, Flex } from '@chakra-ui/react'
import s from "./About.module.css"



export default function About() {
    return (
        <div className={s.margin}>
            <div className={s.container} >
                <Image m={5} boxSize='250px' src="https://i.ibb.co/VDBQHmF/Sobremi.png"
                    alt='img' />
                <Box m={5} w='60%'>
                    <Heading mb={4}>Acerca de mi</Heading>
                    <Text fontSize='xl'>
                        ¡Hola! Soy Nehuen, un desarrollador web Full-Stack.

                        Dentro de mis aptitudes reconozco que me gusta autosuperarme y estar continuamente aprendiendo, soy curioso y me encanta trabajar en equipo.

                        Mis mayores fortalezas están relacionadas a la comunicación, trabajo en equipo, empatía y perseverancia.

                        Me apasiona la programación y me gusta desempeñarme tanto en el front como en el back.
                    </Text>
                </Box>
            </div >
            <Divider orientation='horizontal' />
        </div>
    )
}