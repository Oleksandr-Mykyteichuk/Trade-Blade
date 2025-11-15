import { useEffect, useRef, useState } from "react";

export function Numbers() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="numbers"
      ref={sectionRef}
      className={`numbers fade-in ${isVisible ? "fade-in--visible" : ""}`}
    >
      <div>
        <h3 className="numbers-title">ЦИФРИ</h3>
        <p className="numbers-text">Вересень 2022</p>
      </div>

      <div className="numbers-info">
        <div>
          <p className="numbers-text">Торгівельного прибутку</p>
          <h3 className="numbers-number">2756%</h3>
        </div>
        <div>
          <p className="numbers-text">фючерсних та спотових угод</p>
          <h3 className="numbers-number">67</h3>
        </div>
        <div>
          <p className="numbers-text">прибуток підписників</p>
          <h3 className="numbers-number">375000</h3>
        </div>
      </div>
    </section>
  );
}
