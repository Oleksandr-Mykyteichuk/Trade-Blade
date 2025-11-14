export function Title() {
    return (
        <>
            <div className="title">
                <div className='wrapper'>
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
                <div>
                    <h3 className="title-text">
                        Миттєво копіюй угоди професійних трейдерів
                    </h3>
                    <p className="text">
                        Почни копіювати угоди разом з успішною командою професійних трейдерів в автоматичному режимі.
                    </p>
                </div>
                <div className="input-blok">
                    <input className="input-email" type="email" placeholder="ВАШ E-MAIL"/>
                    <button className="button-start">почати</button>
                </div>
                <p className="bottom-text">5 днів безкоштовно</p>
            </div>
        </>
    );
}