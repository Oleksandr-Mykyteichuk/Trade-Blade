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
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <HeaderPhone toggleBurgerMenu={toggleBurgerMenu} />
      {isBurgerMenuOpen && <BurgerMenu onOpenModal={openModal} onClose={toggleBurgerMenu} />}
      <Title onOpenModal={openModal} />
      <Numbers />
      <Traids />
      <About onOpenModal={openModal} />
      <Tariffs onOpenModal={openModal} />
      <Faq />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default App
