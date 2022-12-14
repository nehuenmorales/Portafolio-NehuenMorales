import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css';
import Header from './components/Header/Header';
import About from "./components/about/About";
import Proyects from "./components/Proyects/Proyects";
import Skils from "./components/Skils/Skils";
import NavBAr from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      {/* <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">Nehuen</Heading>

        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={()=> window.open("https://www.linkedin.com/in/nehuen-morales-cabrino-22b091211/")}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={()=> window.open("https://github.com/nehuenmorales")} ></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex> */}
      <NavBAr></NavBAr>
      <Header></Header>
      <About></About>
      <Proyects></Proyects>
      <Skils></Skils>
      <Contact></Contact>
    </VStack>
  );
}

// background="linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 61%, rgba(0,212,255,1) 100%);"

export default App;
