import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/button";
import { FaYoutube, FaGithub, FaGoogle } from 'react-icons/fa'


import s from "./Proyects.module.css"


export default function Proyects() {
    return (
        <div className={s.container} >
            <Tabs className={s.tab} isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>FaltaUno App</Tab>
                    <Tab>Countries App</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel m={0} p={0}>
                        <div className={s.contenedorImg}>
                            <img className={s.img} src="https://i.ibb.co/LC6bcLB/Falta-Uno-App.png" alt="" ></img>
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
        </div>
    )
}
