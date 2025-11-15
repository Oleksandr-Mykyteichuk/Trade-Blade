import React, { useEffect, useRef } from 'react';
import { useInView } from '../../hooks/useInView';

type Deal = {
  pair: string;
  profit: string;
  type: string;
  target: string;
  date: string;
};

const deals: Deal[] = [
  {
    pair: 'NEAR/USDT',
    profit: '58.6206%',
    type: 'СПОТ · 3 хв. тому',
    target: 'Ціль 4',
    date: 'Дата входу 06.10.2022',
  },
  {
    pair: 'BTC/USDT',
    profit: '6.02%',
    type: 'СПОТ · 5 хв. тому',
    target: 'Ціль 3',
    date: 'Дата входу 06.10.2022',
  },
  {
    pair: 'ETH/USDT',
    profit: '16.3%',
    type: 'СПОТ · 7 хв. тому',
    target: 'Ціль 2',
    date: 'Дата входу 06.10.2022',
  },
  {
    pair: 'NEAR/USDT',
    profit: '0.963%',
    type: 'СПОТ · 10 хв. тому',
    target: 'Ціль 4',
    date: 'Дата входу 06.10.2022',
  },
  {
    pair: 'BNB/USDT',
    profit: '12.45%',
    type: 'СПОТ · 2 хв. тому',
    target: 'Ціль 1',
    date: 'Дата входу 05.10.2022',
  },
  {
    pair: 'SOL/USDT',
    profit: '23.81%',
    type: 'СПОТ · 4 хв. тому',
    target: 'Ціль 2',
    date: 'Дата входу 06.10.2022',
  },
  {
    pair: 'XRP/USDT',
    profit: '4.72%',
    type: 'СПОТ · 6 хв. тому',
    target: 'Ціль 3',
    date: 'Дата входу 06.10.2022',
  },
  {
    pair: 'ADA/USDT',
    profit: '9.16%',
    type: 'СПОТ · 8 хв. тому',
    target: 'Ціль 2',
    date: 'Дата входу 05.10.2022',
  },
  {
    pair: 'DOT/USDT',
    profit: '15.04%',
    type: 'СПОТ · 12 хв. тому',
    target: 'Ціль 3',
    date: 'Дата входу 04.10.2022',
  },
  {
    pair: 'MATIC/USDT',
    profit: '3.27%',
    type: 'СПОТ · 1 хв. тому',
    target: 'Ціль 1',
    date: 'Дата входу 06.10.2022',
  },
  {
    pair: 'LTC/USDT',
    profit: '7.91%',
    type: 'СПОТ · 9 хв. тому',
    target: 'Ціль 2',
    date: 'Дата входу 06.10.2022',
  },
  {
    pair: 'AVAX/USDT',
    profit: '18.62%',
    type: 'СПОТ · 11 хв. тому',
    target: 'Ціль 4',
    date: 'Дата входу 03.10.2022',
  },
];

export const Traids: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  const { ref: sectionRef, inView } = useInView(0.2);

  useEffect(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;

    if (!slider || !track || !thumb) return;

    const updateThumb = () => {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      const maxScroll = scrollWidth - clientWidth;
      const trackWidth = track.offsetWidth;

      if (maxScroll <= 0) {
        thumb.style.width = `${trackWidth}px`;
        thumb.style.transform = 'translateX(0)';
        return;
      }

      const visibleRatio = clientWidth / scrollWidth;
      const thumbWidth = trackWidth * visibleRatio;
      const progress = scrollLeft / maxScroll;
      const maxShift = trackWidth - thumbWidth;

      thumb.style.width = `${thumbWidth}px`;
      thumb.style.transform = `translateX(${progress * maxShift}px)`;
    };

    updateThumb();
    slider.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);

    return () => {
      slider.removeEventListener('scroll', updateThumb);
      window.removeEventListener('resize', updateThumb);
    };
  }, []);

  return (
    <section
      id="online-deals"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`traids fade-in ${inView ? 'fade-in--visible' : ''}`}
    >
      <h2 className="traids__title">Минулі угоди</h2>

      <p className="traids__status">
        <span className="traids__dot" /> Онлайн
      </p>

      <div className="traids__wrapper">
        <div className="traids__slider" ref={sliderRef}>
          {deals.map((deal, index) => (
            <article
              className={
                'traids__card traids-anim ' +
                (inView ? 'traids-anim--visible' : '')
              }
              key={index}
              style={{ transitionDelay: inView ? `${index * 0.06}s` : '0s' }}
            >
              <div className="traids__top">
                <span className="traids__pair">{deal.pair}</span>
                <span className="traids__type">{deal.type}</span>
              </div>

              <div className="traids__middle">
                <span className="traids__label">Прибуток</span>
                <span className="traids__profit">{deal.profit} ↑</span>
              </div>

              <div className="traids__bottom">
                <span className="traids__target">{deal.target}</span>
                <span className="traids__date">{deal.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="traids__track" ref={trackRef}>
          <div className="traids__thumb" ref={thumbRef} />
        </div>
      </div>
    </section>
  );
};

export default Traids;
