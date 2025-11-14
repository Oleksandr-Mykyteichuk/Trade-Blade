interface HeaderActionsProps {
  toggleBurgerMenu: () => void;
}

export function HeaderPhone({ toggleBurgerMenu }: HeaderActionsProps ) {
    return (
        <>
            <div className="phone">
                <a href="/">
                    <img className="logo" src=".\src\assets\logo.svg" alt="logo" />
                </a>
                <button className="burger" onClick={toggleBurgerMenu}>
                    <img src=".\src\assets\burger.svg" alt="burger" />
                </button>
            </div>
        </>
    );
}