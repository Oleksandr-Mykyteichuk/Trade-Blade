interface BurgerMenuProps {
    onClose: () => void;
}

export function BurgerMenu({ onClose }: BurgerMenuProps) {
    const handleClick = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        onClose();
    };
    return (
        <>
            <div className="body">
                <div className="close">
                    <button className="close__button" onClick={onClose}>
                        <img src="./src/assets/close.svg" alt="close" />
                    </button>
                </div>
                <nav className="navigation-burger">
                    <a className="link-burger" href="#numbers" onClick={handleClick('numbers')}>ЦИФРИ</a>
                    <a className="link-burger" href="#online-deals" onClick={handleClick('online-deals')}>УГОДИ ОНЛАЙН</a>
                    <a className="link-burger" href="#about" onClick={handleClick('about')}>ПРО КОМПАНІЮ</a>
                    <a className="link-burger" href="#tradeblade" onClick={handleClick('tradeblade')}>TRADEBLADE ЦЕ</a>
                    <a className="link-burger" href="#how-start" onClick={handleClick('how-start')}>ЯК ПОЧАТИ</a>
                    <a className="link-burger" href="#tariffs" onClick={handleClick('tariffs')}>ТАРИФИ</a>
                    <a className="link-burger" href="#faq" onClick={handleClick('faq')}>FAQ</a>
                </nav>
                <div className="button-burger">
                    <button className="in-burger">ВХІД</button>
                    <button className="up-burger">РЕЄСТРАЦІЯ</button>
                </div>
            </div>
        </>
    );
}