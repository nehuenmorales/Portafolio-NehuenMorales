import React, { useEffect, useState } from "react";
import s from "./SkilCard.module.css"



export default function SkilCard({ nombre, imagen }) {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches))
    }, [])
    return (
        <>
            {
                matches ?
                    <div className={s.card}>
                        <img src={imagen} alt={nombre} />
                    </div>
                    :
                    <div className={s.cardcelu}>
                        <img src={imagen} alt={nombre} />
                    </div>
            }
        </>
    )
}