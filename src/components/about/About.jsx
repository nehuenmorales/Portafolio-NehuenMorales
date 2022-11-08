import React from "react"
import { Image, Divider, Heading, Text, Box, Flex } from '@chakra-ui/react'
import s from "./About.module.css"
import { useState } from "react"
import { useEffect } from "react"



export default function About() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches))
    }, [])

    return (
        <>{
            matches ?
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
                                🚀Soy desarrollador Full-Stack graduado de Henry Bootcamp, me especializo en el Stack PERN y en el desarrollo de API REST en Java y Spring Boot.
                            </Text>
                            <Text className={s.text} m={10} fontSize='xl'>
                                👨‍💻Me gusta superarme y aprender cosas nuevas todos los días. Actualmente sigo estudiando y aplicando los conocimientos en nuevos proyectos personales.
                                Me apasiona la tecnología y la innovación por eso quiero ser parte de ella.
                            </Text>
                            <Text className={s.text} m={10} fontSize='xl'>
                                🍀Además de mi interés en la tecnología, tengo un interés particular en la salud, el deporte y el contacto con el medio ambiente. por eso busco unir estos mundos en mis proyectos y trabajos.
                            </Text>
                        </Box>
                    </div >
                    <Divider orientation='horizontal' />
                </div>
                :
                <div className={s.margin}>
                    <div className={s.container} >
                        <Box w='100%'>
                            <Heading className={s.heading} mb={4}>Acerca de mi</Heading>
                            <Text className={s.holacelu} fontSize='2xl'>
                                Hola 👋! mi nombre es Nehuen.
                            </Text>
                            <Text className={s.text} mb={10} mt={10} fontSize='xl'>
                                🚀Soy desarrollador Full-Stack graduado de Henry Bootcamp, me especializo en el Stack PERN y en el desarrollo de API REST en Java y Spring Boot.
                            </Text>
                            <Text className={s.text} mb={10} fontSize='xl'>
                                👨‍💻Me gusta superarme y aprender cosas nuevas todos los días. Actualmente sigo estudiando y aplicando los conocimientos en nuevos proyectos personales.
                                Me apasiona la tecnología y la innovación por eso quiero ser parte de ella.
                            </Text>
                            <Text className={s.text} mb={10} fontSize='xl'>
                                🍀Además de mi interés en la tecnología, tengo un interés particular en la salud, el deporte y el contacto con el medio ambiente. por eso busco unir estos mundos en mis proyectos y trabajos.
                            </Text>
                        </Box>
                        <Image m={5} boxSize='250px' src="https://i.ibb.co/VDBQHmF/Sobremi.png"
                            alt='img' />
                    </div >
                    <Divider orientation='horizontal' />
                </div>
        }
        </>
    )
}