import React from 'react';
import './WinModal.css';

export const WinModal = () => {

    return (
        <section className="win-modal">
                <p className="win-modal__text">Ура, ВЫ выиграли! это заняло 10 ходов</p>
                <button className="win-modal__btn">Сыграть еще</button>
        </section>
    )
}