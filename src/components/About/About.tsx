import { Start } from "../Start/Start";
import { useInView } from "../../hooks/useInView";

type AboutProps = {
  onOpenModal: () => void;
};

export function About({ onOpenModal }:AboutProps) {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      id="about"
      ref={ref as any}
      className={`about fade-in ${inView ? "fade-in--visible" : ""}`}
    >
      <div className="about-top">
        <h2 className="about-title">про компанію</h2>
        <p className="about-text">
          Ми — досвідчена команда, для якої трейдинг — це професія. TradeBlade є
          авторизованим офіційним брокером біржі Binance.
        </p>
        <p className="about-text">
          Він надає користувачам багато переваг, як-от вища швидкість
          синхронізації API та можливість створити обліковий запис Binance через
          платформу TradeBlade лише в 1 клік.
        </p>
      </div>

      <div className="about-start">
        <Start onOpenModal={onOpenModal} />
      </div>
    </section>
  );
}
