import React, { useEffect, useState } from 'react';
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useToast } from '@chakra-ui/react'

import emailjs from 'emailjs-com';
import { Heading, Divider, Center } from '@chakra-ui/react';
import s from "./Contact.module.css"


export default function Contact() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches))
    }, [])

    const toast = useToast()
    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })
    const [input, setInput] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })
    const validador = (inputs) => {
        let validations = {};
        const nameExpresion = /[0-9/'0-9'/,*+._&=():;%$#!|-]/gi;
        const emailExpresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!inputs.nombre) {
            validations.nombre = 'Debe ingresar su nombre'
        } else if (nameExpresion.test(inputs.nombre)) {
            validations.nombre = 'Ingrese solo letras'
        } else if (!inputs.email) {
            validations.email = 'Debe ingresar su email'
        }
        else if (!emailExpresion.test(inputs.email)) {
            validations.email = 'Ingrese un email válido'
        }
        else if (!inputs.mensaje) {
            validations.mensaje = 'Debe ingresar un mensaje'
        }
        return validations
    }

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        const errores = validador({ ...input, [e.target.name]: e.target.value })
        setErrors(errores)
    }

    const enviarEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_n8troi7', 'template_piceeg5', e.target, 't_5t4kxqizKDi5Kjo').then(res => {
            console.log(res);
        })
        setInput({
            nombre: '',
            email: '',
            mensaje: ''
        })
        // addToast()
    }
    // const addToast = () => {
    //     toast({
    //         title: `Mensaje Enviado`,
    //         status: "succes",
    //         isClosable: true,
    //     })
    // }


    return (
        <>
            <Heading m={10} className={s.head}>Contacto</Heading>
            {
                matches ?
                    <div className={s.container}>
                        <div className={s.social}>
                            <IconButton m={5} icon={<FaLinkedin />} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/nehuen-morales-cabrino-22b091211/")}></IconButton>
                            <IconButton m={5} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/nehuenmorales")} ></IconButton>
                        </div>

                        <Center height='60vh'>
                            <Divider orientation='vertical' />
                        </Center>

                        <form className={s.form} onSubmit={enviarEmail}>
                            <div className={s.mensajes}>
                                <Heading mt={10} ml={2} mb={10} fontSize='2xl'>Enviar mensaje</Heading>
                                <div className={s.colums}>
                                    <div className={s.left}>
                                        <div className={s.label}>
                                            <label><b>Nombre</b></label>
                                            <input type="text" onChange={e => handleOnChange(e)} className={s.input} id="nombre" name="nombre" value={input.nombre} />
                                            {errors.nombre ? <p style={{ color: 'red', marginBottom: '10px' }}>{errors.nombre}</p> : null}
                                        </div>
                                        <div className={s.label} >
                                            <label ><b>Email</b></label>
                                            <input type="text" onChange={e => handleOnChange(e)} className={s.input} id="email" name="email" value={input.email} />
                                            {errors.email ? <p style={{ color: 'red', marginBottom: '10px' }}>{errors.email}</p> : null}
                                        </div>
                                    </div>
                                    <div className={s.labelr} >
                                        <label ><b>Mensaje</b></label>
                                        <textarea type="text" onChange={e => handleOnChange(e)} className={s.Itext} id="mensaje" name="mensaje" value={input.mensaje}></textarea>
                                        {errors.mensaje ? <p style={{ color: 'red', marginBottom: '10px' }}>{errors.mensaje}</p> : null}
                                    </div>
                                </div>
                                <div className={s.boton}>
                                    {!errors.nombre && !errors.email && !errors.mensaje && input.nombre && input.mensaje && input.email ?
                                        <button onClick={() =>
                                            toast({
                                                title: 'Mensaje enviado',
                                                description: "te respondere lo antes posible",
                                                status: 'success',
                                                duration: 9000,
                                                isClosable: true,
                                            })
                                        } type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(0, 184, 63, 1)', border: 'none', width: "50%", margin: "0 auto", marginTop: "20px" }}>Enviar Correo</button>
                                        : <button type="submit" disabled className="btn btn-primary" style={{ backgroundColor: 'rgba(195, 195, 195)', border: 'none', width: "50%", margin: "0 auto", marginTop: "20px" }}>Enviar Correo</button>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                    :
                    <div className={s.containercelu}>
                        <div className={s.socialcelu}>
                            <IconButton m={5} icon={<FaLinkedin />} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/nehuen-morales-cabrino-22b091211/")}></IconButton>
                            <IconButton m={5} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/nehuenmorales")} ></IconButton>
                        </div>
                        <Center w='70%'>
                            <Divider orientation='horizontal' />
                        </Center>
                        <form className={s.formcelu} onSubmit={enviarEmail}>
                            <div className={s.mensajescelu}>
                                <Heading mt={10} ml={2} mb={10} fontSize='2xl'>Enviar mensaje</Heading>
                                <div className={s.columscelu}>
                                    <div className={s.leftcelu}>
                                        <div className={s.label}>
                                            <label><b>Nombre</b></label>
                                            <input type="text" onChange={e => handleOnChange(e)} className={s.input} id="nombre" name="nombre" value={input.nombre} />
                                            {errors.nombre ? <p style={{ color: 'red', marginBottom: '10px' }}>{errors.nombre}</p> : null}
                                        </div>
                                        <div className={s.label} >
                                            <label ><b>Email</b></label>
                                            <input type="text" onChange={e => handleOnChange(e)} className={s.input} id="email" name="email" value={input.email} />
                                            {errors.email ? <p style={{ color: 'red', marginBottom: '10px' }}>{errors.email}</p> : null}
                                        </div>
                                    </div>
                                    <div className={s.labelcelu} >
                                        <label ><b>Mensaje</b></label>
                                        <textarea type="text" onChange={e => handleOnChange(e)} className={s.Itext} id="mensaje" name="mensaje" value={input.mensaje}></textarea>
                                        {errors.mensaje ? <p style={{ color: 'red', marginBottom: '10px' }}>{errors.mensaje}</p> : null}
                                    </div>
                                </div>
                                <div className={s.boton}>
                                    {!errors.nombre && !errors.email && !errors.mensaje && input.nombre && input.mensaje && input.email ?
                                        <button onClick={() =>
                                            toast({
                                                title: 'Mensaje enviado',
                                                description: "te respondere lo antes posible",
                                                status: 'success',
                                                duration: 9000,
                                                isClosable: true,
                                            })
                                        } type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(0, 184, 63, 1)', border: 'none', width: "50%", margin: "0 auto", marginTop: "20px" }}>Enviar Correo</button>
                                        : <button type="submit" disabled className="btn btn-primary" style={{ backgroundColor: 'rgba(195, 195, 195)', border: 'none', width: "50%", margin: "0 auto", marginTop: "20px" }}>Enviar Correo</button>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>

            }
        </>
    )
}