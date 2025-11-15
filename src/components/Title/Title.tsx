import { useInView } from "../../hooks/useInView";

export function Title() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref as any}
      className={`title slide-in ${inView ? "slide-in--visible" : ""}`}
    >
      <div className='title-wrapper'>
        <div className='card cardGhost'>
          <div className="info">
            <h3 className='pair'>ETH/USDT</h3>
            <p className='type'>Short</p>
            <h3 className='percent'>+141%</h3>
          </div>
        </div>

        <div className='card cardMain'>
          <div className="info">
            <h3 className='pair'>ETH/USDT</h3>
            <p className='type'>Short</p>
            <h3 className='percent'>+116%</h3>
          </div>
        </div>
      </div>

      <div className="ttitle-top">
        <h3 className="title-text">
          Миттєво копіюй угоди професійних трейдерів
        </h3>
        <p className="text">
          Почни копіювати угоди разом з успішною командою професійних трейдерів в автоматичному режимі.
        </p>

        <div className="input-blok">
          <input className="input-email" type="email" placeholder="ВАШ E-MAIL" />
          <button className="button-start">почати</button>
          <p className="bottom-text">5 днів безкоштовно</p>
        </div>
      </div>
    </section>
  );
}
