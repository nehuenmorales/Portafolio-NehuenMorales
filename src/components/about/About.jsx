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
                    <Heading className={s.heading} mb={4}>Acerca de mi</Heading>
                    <Text className={s.hola} fontSize='2xl' m={2}>
                        Hola 👋! mi nombre es Nehuen.
                    </Text>
                    <Text className={s.text} m={10} fontSize='xl'>
                        🚀Soy desarrollador Full-Stack graduado de Henry Bootcamp, con experiencia trabajando en tecnologías y frameworks relacionados a JavaScript.
                    </Text>
                    <Text className={s.text} m={10} fontSize='xl'>
                        👨‍💻Me gusta superarme y aprender cosas nuevas todos los días. Actualmente sigo estudiando y aplicando los conocimientos en nuevos proyectos personales relacionados a la programación.
                        Me apasiona la tecnología y la innovación por eso quiero ser parte de ella.
                    </Text>
                    <Text className={s.text} m={10} fontSize='xl'>
                        🍀Además de mi interés en la tecnología, tengo un interés particular en la salud, el deporte y el contacto con el medio ambiente. por eso busco unir estos mundos en mis proyectos y trabajos.
                    </Text>
                </Box>
            </div >
            <Divider orientation='horizontal' />
        </div>
    )
}