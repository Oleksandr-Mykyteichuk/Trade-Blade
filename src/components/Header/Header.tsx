export function Header() {
    return (
        <>
            <div className="header">
                <a href="/">
                <img className="header-logo" src=".\src\assets\logo.svg" alt="logo" />
                </a>
                <nav className="header-navigation">
                    <a className="header-link" href="#numbers">Цифри</a>
                    <a className="header-link" href="#online-deals">Угоди онлайн</a>
                    <a className="header-link" href="#about">Про компанію</a>
                    <a className="header-link" href="#how-start">Як почати</a>
                    <a className="header-link" href="#tariffs">Тарифи</a>
                    <a className="header-link" href="#comments">Відгуки</a>
                    <a className="header-link" href="#faq">FAQ</a>
                </nav>

                <div className="header-button">
                    <button className="header-in">ВХІД</button>
                    <button className="header-up">РЕЄСТРАЦІЯ</button>
                </div>
            </div>
        </>
    );
}