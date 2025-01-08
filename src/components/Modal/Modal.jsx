import { useEffect} from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css'; 

export const Modal = ({ isOpenModal, closeModal, children }) => {
    
    const onBackdropClose = (e) => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
      };

    useEffect(() => {
        const keyDown = e => {
          if (e.code === 'Escape') {
            closeModal();
          }
        };
        window.addEventListener('keydown', keyDown);
        return () => {window.removeEventListener('keydown', keyDown);}
    }, [closeModal])

    if (!isOpenModal) return null; // Не рендерити, якщо модальне вікно закрите

    return ReactDOM.createPortal(
        <div
            className={css.overlay}
            onClick={onBackdropClose}
        >
            <div 
                className={css.modalContent} 
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body // Рендерити в body, щоб оверлей не залежав від ширини контейнера і займав всю ширину екрану
    );
};
