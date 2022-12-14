import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider, Heading, Text } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/button";
import { FaYoutube, FaGithub, FaGoogle } from 'react-icons/fa'


import s from "./Proyects.module.css"


export default function Proyects() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches))
    }, [])

    return (
        <div style={{ 'width': "100%" }}>
            <Heading className={s.head} m={10}>Mis Proyectos</Heading>
            {
                matches ?

                    <div className={s.container} >
                        <Tabs className={s.tab} isFitted variant='enclosed'>
                            <TabList mb='1em'>
                                <Tab>FaltaUno App</Tab>
                                <Tab>Countries App</Tab>
                            </TabList>
                            <TabPanels>
                                {/* https://i.ibb.co/LC6bcLB/Falta-Uno-App.png */}
                                <TabPanel m={0} p={0}>
                                    <div className={s.contenedorImg}>
                                        <img className={s.img} src=" https://i.ibb.co/LC6bcLB/Falta-Uno-App.png " alt="" ></img>
                                        <div className={s.info}>
                                            <h3 className={s.titulo}>Falta Uno APP</h3>
                                            <p className={s.parrafo}>Diseñar y desarrollar una App para facilitar el sistema de reservas de canchas en complejos
                                                deportivos que incluía: Login, agenda, calendario, chat interno, notificaciones y pasarela de
                                                pagos.
                                                Desarrollar la app en React con estilos en CSS, Bootstrap y Chakra-Ui, notificaciones con
                                                sendGrid y chat implementado con Socket.io. Back desarrollado en Node con Express, base de
                                                datos en PostgreSQL y Sequelize</p>
                                        </div>
                                    </div>

                                    <div className={s.faltauno}>
                                        <IconButton ml={2} mt={2} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/falta-uno/proyecto-grupal.git")} />
                                        <IconButton ml={2} mt={2} icon={<FaYoutube />} isRound='true' onClick={() => window.open("https://www.youtube.com/watch?v=poKQwUS8ZdM")} />
                                        <IconButton ml={2} mt={2} icon={<FaGoogle />} isRound='true' onClick={() => window.open("https://falta-uno-henry.vercel.app/")} />
                                    </div>
                                </TabPanel>
                                <TabPanel m={0} p={0}>
                                    {/* <div><img className={s.img} src="https://i.ibb.co/MhTs9YC/Countries-App.png" alt="" /></div> */}

                                    <div className={s.contenedorImg}>
                                        <img className={s.img} src="https://i.ibb.co/MhTs9YC/Countries-App.png" alt="" ></img>
                                        <div className={s.info}>
                                            <h3 className={s.titulo}>Countries APP</h3>
                                            <p className={s.parrafo}>Desarrollar una aplicación web utilizando Express.js, React-Redux, Node.js y PostgreSQL.
                                                Utilizar API REST para proveer de datos a la aplicación.
                                                Construir y diseñar Front End, Back End y Base de Datos</p>
                                        </div>
                                    </div>
                                    <div className={s.faltauno}>
                                        <IconButton ml={2} mt={2} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/nehuenmorales/PI-Countries.git")} />
                                        <IconButton ml={2} mt={2} icon={<FaGoogle />} isRound='true' onClick={() => window.open("https://pi-countries-jf2a6siif-nehuenmorales.vercel.app/")} />
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Divider mt={20} orientation='horizontal' />
                    </div>
                    :
                    <div  >
                        <Tabs className={s.tab} isFitted variant='enclosed'>
                            <TabList mb='1em'>
                                <Tab>FaltaUno App</Tab>
                                <Tab>Countries App</Tab>
                            </TabList>
                            <TabPanels>
                                {/* https://i.ibb.co/LC6bcLB/Falta-Uno-App.png */}
                                <TabPanel m={0} p={0}>
                                    <div className={s.contenedorImgcelu}>
                                        <img className={s.img} src=" https://i.ibb.co/LC6bcLB/Falta-Uno-App.png " alt="" ></img>
                                    </div>

                                    <div className={s.faltauno}>
                                        <IconButton ml={2} mt={2} mb={3} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/falta-uno/proyecto-grupal.git")} />
                                        <IconButton ml={2} mt={2} mb={3} icon={<FaYoutube />} isRound='true' onClick={() => window.open("https://www.youtube.com/watch?v=poKQwUS8ZdM")} />
                                        <IconButton ml={2} mt={2} mb={3} icon={<FaGoogle />} isRound='true' onClick={() => window.open("https://falta-uno-henry.vercel.app/")} />
                                    </div>

                                    <div >
                                        <Text fontSize='2xl'>Falta Uno - APP</Text>
                                        <Text fontSize='xl'>Diseñar y desarrollar una App para facilitar el sistema de reservas de canchas en complejos
                                            deportivos que incluía: Login, agenda, calendario, chat interno, notificaciones y pasarela de
                                            pagos.
                                            Desarrollar la app en React con estilos en CSS, Bootstrap y Chakra-Ui, notificaciones con
                                            sendGrid y chat implementado con Socket.io. Back desarrollado en Node con Express, base de
                                            datos en PostgreSQL y Sequelize</Text>
                                    </div>
                                </TabPanel>
                                <TabPanel m={0} p={0}>
                                    {/* <div><img className={s.img} src="https://i.ibb.co/MhTs9YC/Countries-App.png" alt="" /></div> */}

                                    <div className={s.contenedorImgcelu}>
                                        <img className={s.img} src="https://i.ibb.co/MhTs9YC/Countries-App.png" alt="" ></img>
                                    </div>
                                    <div className={s.faltauno}>
                                        <IconButton ml={2} mt={2} mb={3} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/nehuenmorales/PI-Countries.git")} />
                                        <IconButton ml={2} mt={2} mb={3} icon={<FaGoogle />} isRound='true' onClick={() => window.open("https://pi-countries-jf2a6siif-nehuenmorales.vercel.app/")} />
                                    </div>
                                    <div >
                                        <Text fontSize='2xl'>Countries - APP</Text>
                                        <Text fontSize='xl'>Desarrollar una aplicación web utilizando Express.js, React-Redux, Node.js y PostgreSQL.
                                            Utilizar API REST para proveer de datos a la aplicación.
                                            Construir y diseñar Front End, Back End y Base de Datos</Text>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Divider mt={20} orientation='horizontal' />
                    </div>
            }
        </div>
    )
}
