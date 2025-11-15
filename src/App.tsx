import "./styles/index.scss";
import { Header } from "./components/Header/Header"
import { Title } from "./components/Title/Title"
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";
import { Numbers } from "./components/Numbers/Numbers";
import { Traids } from "./components/Traids/Traids";
import { About } from "./components/About/About";
import { Tariffs } from "./components/Tariffs/Tariffs";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import { HeaderPhone } from "./components/HeaderPhone/HeaderPhone";
import { useState } from "react";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
    <Header />
    <HeaderPhone toggleBurgerMenu={toggleBurgerMenu} />
    {isBurgerMenuOpen && <BurgerMenu onClose={toggleBurgerMenu} />}
    <Title />
    <Numbers />
    <Traids />
    <About />
    <Tariffs />
    <Faq />
    <Footer />
    </>
  )
}

export default App
