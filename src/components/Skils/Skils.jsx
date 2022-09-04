import { Icon } from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import s from "./Skils.module.css"
import { skils } from "../../DB/SkilsDB";
import { Heading } from '@chakra-ui/react'
import SkilCard from "./SkilCard";



export default function Skils() {
    return (
        <div>
            <Heading m={10}>Skils</Heading>
            <div className={s.container}>
                {
                    skils.map((e) => {
                        return (<div className={s.cards}>
                            <SkilCard nombre={e.nombre} imagen={e.imagen} />
                        </div>)
                    })
                }
            </div>
        </div>
    )
}