import logo from '../../assets/logo.svg'

export function Footer () {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-label">ШВИДКА НАВІГАЦІЯ</div>

        <nav className="footer-nav">
          <a href="#numbers" className="footer-link">ЦИФРИ</a>
          <a href="#online-deals" className="footer-link">УГОДИ ОНЛАЙН</a>
          <a href="#about" className="footer-link">ПРО КОМПАНІЮ</a>
          <a href="#tariffs" className="footer-link">ТАРИФИ</a>
          <a href="#faq" className="footer-link">FAQ</a>
        </nav>
      </div>

      <div className="footer-bottom">
          <img src={logo} alt="TradeBlade" className="footer-logo" />

        <p className="footer-copy">
          © 2022 TradeBlade. All rights reserved
        </p>
      </div>
    </footer>
  );
};
