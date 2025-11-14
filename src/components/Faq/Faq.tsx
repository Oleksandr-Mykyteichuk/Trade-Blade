import { useState } from 'react';

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

  const toggleItem = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section id='faq' className="faq">
      <h2 className="faq__title">ЧАСТІ ЗАПИТАННЯ</h2>

      <div className="faq__list">
        {faqItems.map(item => {
          const isActive = item.id === activeId;

          return (
            <div
              key={item.id}
              className={
                'faq__item ' + (isActive ? 'faq__item--active' : '')
              }
            >
              <button
                type="button"
                className="faq__question"
                onClick={() => toggleItem(item.id)}
              >
                <span>{item.question}</span>
                <span
                  className={
                    'faq__icon ' + (isActive ? 'faq__icon--open' : '')
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

              {isActive && (
                <p className="faq__answer">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
