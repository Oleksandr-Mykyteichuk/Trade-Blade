import logo from '../../assets/logo.svg'
import burger from '../../assets/burger.svg'

interface HeaderActionsProps {
  toggleBurgerMenu: () => void;
}

export function HeaderPhone({ toggleBurgerMenu }: HeaderActionsProps ) {
    return (
        <>
            <header className="phone">
                <a href="/">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <button className="burger" onClick={toggleBurgerMenu}>
                    <img src={burger} alt="burger" />
                </button>
            </header>
        </>
    );
}