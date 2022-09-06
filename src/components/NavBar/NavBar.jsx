import React from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function NavBAr() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Flex w="100%">
            <Heading
                ml="8" size="md" fontWeight='semibold' color="cyan.400">Nehuen</Heading>

            <Spacer></Spacer>
            <IconButton icon={<FaLinkedin />} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/nehuen-morales-cabrino-22b091211/")}></IconButton>
            <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/nehuenmorales")} ></IconButton>
            <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
    )
}