import close from '../../assets/close.svg'

interface BurgerMenuProps {
    onClose: () => void;
    onOpenModal: () => void;
}

export function BurgerMenu({ onClose, onOpenModal }: BurgerMenuProps) {
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
                        <img src={close} alt="close" />
                    </button>
                </div>
                <nav className="navigation-burger">
                    <a className="link-burger" href="#numbers" onClick={handleClick('numbers')}>ЦИФРИ</a>
                    <a className="link-burger" href="#online-deals" onClick={handleClick('online-deals')}>УГОДИ ОНЛАЙН</a>
                    <a className="link-burger" href="#about" onClick={handleClick('about')}>ПРО КОМПАНІЮ</a>
                    <a className="link-burger" href="#tariffs" onClick={handleClick('tariffs')}>ТАРИФИ</a>
                    <a className="link-burger" href="#faq" onClick={handleClick('faq')}>FAQ</a>
                </nav>
                <div className="button-burger">
                    <button className="in-burger" onClick={onOpenModal}>ВХІД</button>
                    <button className="up-burger" onClick={onOpenModal}>РЕЄСТРАЦІЯ</button>
                </div>
            </div>
        </>
    );
}