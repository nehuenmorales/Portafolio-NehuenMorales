import React from "react";
import s from "./Skils.module.css"
import { skils } from "../../DB/SkilsDB";
import { Heading, Divider } from '@chakra-ui/react'
import SkilCard from "./SkilCard";



export default function Skils() {
    return (
        <div>
            <Heading className={s.head} m={10}>Skills</Heading>
            <div className={s.container}>
                {
                    skils.map((e) => {
                        return (<div key={e.nombre} className={s.cards}>
                            <SkilCard nombre={e.nombre} imagen={e.imagen} />
                        </div>)
                    })
                }
            </div>
            <Divider mt={20} orientation='horizontal' />
        </div>
    )
}