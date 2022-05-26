import React from 'react';
import './LoseModal.css.css';

export const WinModal = () => {

    return (
        <section className="win-modal">
            <p className="win-madal__text">Увы, вы проиграли у вас кончились ходы</p>
            <button className="win-modal__btn">Сыграть еще</button>
        </section>
    )
}