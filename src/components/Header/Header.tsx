import logo from '../../assets/logo.svg'

type HeadertProps = {
  onOpenModal: () => void;
};

export function Header({ onOpenModal }: HeadertProps) {
    return (
        <>
            <header className="header">
                <img className="header-logo" src={logo} alt="logo" />
                <nav className="header-navigation">
                    <a className="header-link" href="#numbers">Цифри</a>
                    <a className="header-link" href="#online-deals">Угоди онлайн</a>
                    <a className="header-link" href="#about">Про компанію</a>
                    <a className="header-link" href="#tariffs">Тарифи</a>
                    <a className="header-link" href="#faq">FAQ</a>
                </nav>

                <div className="header-button">
                    <button className="header-in" onClick={onOpenModal}>ВХІД</button>
                    <button className="header-up" onClick={onOpenModal}>РЕЄСТРАЦІЯ</button>
                </div>
            </header>
        </>
    );
}