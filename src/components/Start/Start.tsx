type StartProps = {
  onOpenModal: () => void;
};

export function Start({ onOpenModal }: StartProps) {
    return (
        <>
            <section className="start">
                <p className="start-text">Розпочинай прямо зараз з безкоштовним 5-ти дневним пробним періодом!</p>
                <div className="start-blok">
                <input type="email" className="start-email" placeholder="ВАШ E-MAIL" />
                <button onClick={onOpenModal} className="start-button">зареєструватись</button>
                </div>
            </section>
        </>
    );
}