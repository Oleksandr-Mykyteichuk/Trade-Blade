import "./styles/index.scss";
import { Header } from "./components/Header/Header"
import { Title } from "./components/Title/Title"
import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";
import { Numbers } from "./components/Numbers/Numbers";
import { Traids } from "./components/Traids/Traids";
import { About } from "./components/About/About";
import { Start } from "./components/Start/Start";
import { Tradeblade } from "./components/Tradeblade";
import { HowStart } from "./components/HowStart";
import { Tariffs } from "./components/Tariffs/Tariffs";
import { Comments } from "./components/Comments";
import { Quastion } from "./components/Quastion";
import { Footer } from "./components/Footer";
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
    <Start />
    <Tradeblade />
    <HowStart />
    <Tariffs />
    <Comments />
    <Quastion />
    <Start />
    <Footer />
    </>
  )
}

export default App
