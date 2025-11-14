export function Footer () {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__label">ШВИДКА НАВІГАЦІЯ</div>

        <nav className="footer__nav">
          <a href="#numbers" className="footer__link">ЦИФРИ</a>
          <a href="#online-deals" className="footer__link">УГОДИ ОНЛАЙН</a>
          <a href="#about" className="footer__link">ПРО КОМПАНІЮ</a>
          <a href="#what-is" className="footer__link">TRADEBLAD ЦЕ</a>
          <a href="#how-start" className="footer__link">ЯК ПОЧАТИ</a>
          <a href="#tariffs" className="footer__link">ТАРИФИ</a>
          <a href="#faq" className="footer__link">FAQ</a>
        </nav>
      </div>

      <div className="footer__bottom">
          <img src='.\src\assets\logo.svg' alt="TradeBlade" className="footer__logo" />

        <p className="footer__copy">
          © 2022 TradeBlade. All rights reserved
        </p>
      </div>
    </footer>
  );
};
