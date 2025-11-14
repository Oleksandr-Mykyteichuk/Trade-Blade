export function Header() {
    return (
        <>
            <div className="header">
                <a href="/">
                <img className="logo" src=".\src\assets\logo.svg" alt="logo" />
                </a>
                <nav className="navigation">
                    <a className="link" href="#">Цифри</a>
                    <a className="link" href="#">Угоди онлайн</a>
                    <a className="link" href="#">Про компанію</a>
                    <a className="link" href="#">Як почати</a>
                    <a className="link" href="#">Тарифи</a>
                    <a className="link" href="#">Відгуки</a>
                    <a className="link" href="#">FAQ</a>
                </nav>

                <div className="button">
                    <button className="in">ВХІД</button>
                    <button className="up">РЕЄСТРАЦІЯ</button>
                </div>
            </div>
        </>
    );
}