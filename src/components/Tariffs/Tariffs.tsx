import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

type Tariff = {
  name: string;
  features: string[];
  price: string;
  discount: string;
};

const spotTariffs: Tariff[] = [
  {
    name: 'STANDART',
    features: [
      'Ручний трейдинг',
      'Автоматичне або напівавтоматичне копіювання угод',
      'Особистий кабінет зі статистикою',
      'Середньострокові угоди з рівнями набору портфеля',
    ],
    price: '$234',
    discount: '-35%',
  },
  {
    name: 'VIP',
    features: [
      'Ручний трейдинг',
      'Автоматичне або напівавтоматичне копіювання угод',
      'Особистий кабінет зі статистикою',
      'Короткострокові, середньострокові та інвест-угоди',
      'Доступ у VIP-чат із командою',
      'Наш авторський курс з трейдингу',
    ],
    price: '$585',
    discount: '-35%',
  },
];

const futuresTariffs: Tariff[] = [
  {
    name: 'FUTURES BASIC',
    features: [
      'Доступ до фʼючерсних стратегій',
      'Автокопіювання угод з керуванням ризиками',
      'Панель зі статистикою по фʼючерсам',
    ],
    price: '$199',
    discount: '-25%',
  },
  {
    name: 'FUTURES PRO',
    features: [
      'Усі можливості FUTURES BASIC',
      'Розширені інвест-стратегії',
      'VIP-підтримка та приватний чат',
      'Додаткові освітні матеріали',
    ],
    price: '$449',
    discount: '-30%',
  },
];

export function Tariffs() {
  const [mode, setMode] = useState<'spot' | 'futures'>('spot');
  const { ref, inView } = useInView(0.2);

  const tariffs = mode === 'spot' ? spotTariffs : futuresTariffs;

  return (
    <section
      id="tariffs"
      ref={ref as any}
      className={`tariffs fade-in ${inView ? 'fade-in--visible' : ''}`}
    >
      <div>
        <div className="tarif-top">
          <h2 className="tariffs__title">ТАРИФИ</h2>

          <div className="tariffs__switch">
            <div className="tariffs__switch-track">
              <div
                className={
                  'tariffs__switch-thumb ' +
                  (mode === 'futures' ? 'tariffs__switch-thumb--right' : '')
                }
              />
              <button
                type="button"
                className={
                  'tariffs__switch-btn ' +
                  (mode === 'spot' ? 'tariffs__switch-btn--active' : '')
                }
                onClick={() => setMode('spot')}
              >
                СПОТ
              </button>
              <button
                type="button"
                className={
                  'tariffs__switch-btn ' +
                  (mode === 'futures' ? 'tariffs__switch-btn--active' : '')
                }
                onClick={() => setMode('futures')}
              >
                ФʼЮЧЕРС
              </button>
            </div>
          </div>
        </div>

        <div className="tariffs__cards">
          {tariffs.map((tariff, index) => (
            <article
              key={tariff.name}
              className={
                'tariffs__card tariffs-anim ' +
                (index === 1 ? 'tariffs__card--highlight' : '') +
                (inView ? ' tariffs-anim--visible' : '')
              }
              style={{
                transitionDelay: inView ? `${index * 0.1}s` : '0s',
              }}
            >
              <h3 className="tariffs__card-title">{tariff.name}</h3>

              <ul className="tariffs__features">
                {tariff.features.map(feature => (
                  <li key={feature} className="tariffs__feature">
                    <span className="tariffs__feature-icon">✓</span>
                    <span className="tariffs__feature-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="tariffs__bottom">
                <div className="tariffs__price-block">
                  <span className="tariffs__price">{tariff.price}</span>
                  <span className="tariffs__discount">
                    {tariff.discount}
                  </span>
                </div>

                <select className="tariffs__period">
                  <option>12 місяців</option>
                  <option>6 місяців</option>
                  <option>1 місяць</option>
                </select>
              </div>

              <button className="tariffs__cta">
                СПРОБУВАТИ
                <span className="tariffs__cta-sub">
                  5 днів безкоштовно
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
