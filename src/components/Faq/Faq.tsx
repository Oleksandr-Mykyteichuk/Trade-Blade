import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Що таке TradeBlade',
    answer:
      'Ми — досвідчена команда, для якої трейдинг — професія. TradeBlade є авторизованим офіційним брокером біржі Binance. Він надає користувачам багато переваг, як-от вища швидкість синхронізації API та можливість створити обліковий запис Binance через платформу TradeBlade лише в 1 клік.',
  },
  {
    id: 2,
    question: 'Що TradeBlade пропонує інвесторам',
    answer:
      'TradeBlade пропонує готові стратегії, автокопіювання угод та зручну аналітику для інвесторів.',
  },
  {
    id: 3,
    question: 'Чи потрібно переводити свої кошти на TradeBlade',
    answer:
      'Ні, кошти залишаються на вашому біржовому акаунті. TradeBlade працює через API та не зберігає ваші гроші.',
  },
];

export function Faq() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const { ref, inView } = useInView(0.2);

  const toggleItem = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id='faq'
      ref={ref as any}
      className={`faq fade-in ${inView ? "fade-in--visible" : ""}`}
    >
      <div className='faq-blok'>
        <h2 className="faq-title">ЧАСТІ ЗАПИТАННЯ</h2>

        <div className="faq-list">
          {faqItems.map((item, i) => {
            const isActive = item.id === activeId;

            return (
              <div
                key={item.id}
                className={
                  `faq-item ${isActive ? 'faq-item--active' : ''} faq-anim`
                  + (inView ? " faq-anim--visible" : "")
                }
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.question}</span>
                  <span
                    className={
                      'faq-icon ' + (isActive ? 'faq-icon--open' : '')
                    }
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8A8F99"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <p
                  className="faq-answer faq-answer"
                  style={{
                    maxHeight: isActive ? "200px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
