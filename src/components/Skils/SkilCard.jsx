import React from "react";
import s from "./SkilCard.module.css"


export default function SkilCard({ nombre, imagen }) {
    return (
        <div className={s.card}>
            <img src={imagen} alt={nombre} />
        </div>
    )
}