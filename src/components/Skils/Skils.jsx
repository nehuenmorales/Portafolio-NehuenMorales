import { Icon } from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import { IconButton } from "@chakra-ui/button";
import s from "./Skils.module.css"
import { skils } from "../../DB/SkilsDB";
import SkilCard from "./SkilCard";



export default function Skils() {
    return (
        <div>
            {
                skils.map((e) => {
                    return (<SkilCard nombre={e.nombre} imagen={e.imagen} />)
                })
            }
        </div>
    )
}