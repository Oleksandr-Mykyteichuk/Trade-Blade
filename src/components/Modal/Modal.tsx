import { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal ({ isOpen, onClose }: ModalProps)  {
  
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="reg-modal-backdrop" onClick={onClose}>
      <div className="reg-modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="reg-modal__header">
          <h3 className="reg-modal__title">Реєстрація</h3>

          <button 
            className="reg-modal__close"
            aria-label="Закрити"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form 
          className="reg-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Форма відправлена!");
            onClose();
          }}
        >

          <label className="reg-form__label">
            Email
            <input 
              type="email" 
              required 
              className="reg-form__input"
              placeholder="you@mail.com"
            />
          </label>

          <label className="reg-form__label">
            Пароль
            <input 
              type="password" 
              required 
              className="reg-form__input"
              placeholder="Мін. 8 символів"
            />
          </label>

          <label className="reg-form__label">
            Повторити пароль
            <input 
              type="password" 
              required 
              className="reg-form__input"
            />
          </label>

          <button className="reg-form__submit" type="submit">
            Зареєструватися
          </button>

          <p className="reg-form__note">
            Натискаючи "Зареєструватися", ви погоджуєтесь з умовами сервісу.
          </p>
        </form>

      </div>
    </div>
  );
};
