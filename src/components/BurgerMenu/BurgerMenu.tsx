interface BurgerMenuProps {
    onClose: () => void;
}

export function BurgerMenu({ onClose }: BurgerMenuProps) {
    return (
        <>
            <div className="body">
                <div className="close">
                    <button className="close__button" onClick={onClose}>
                        <img src="./src/assets/close.svg" alt="close" />
                    </button>
                </div>
                <nav className="navigation-burger">
                    <a className="link-burger" href="#">Цифри</a>
                    <a className="link-burger" href="#">Угоди онлайн</a>
                    <a className="link-burger" href="#">Про компанію</a>
                    <a className="link-burger" href="#">Як почати</a>
                    <a className="link-burger" href="#">Тарифи</a>
                    <a className="link-burger" href="#">Відгуки</a>
                    <a className="link-burger" href="#">FAQ</a>
                </nav>
                <div className="button-burger">
                    <button className="in-burger">ВХІД</button>
                    <button className="up-burger">РЕЄСТРАЦІЯ</button>
                </div>
            </div>
        </>
    );
}