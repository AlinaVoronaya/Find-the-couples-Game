import React, {FC} from 'react';
import './WinModal.css';
import {CardItem} from "../../types";

interface Props {
    onClick: () => void;
    movesMade: number
}

export const WinModal: FC<Props> = ({onClick, movesMade}) => {

    return (
        <section className="win-modal">
                <p className="win-modal__text">Ура, ВЫ выиграли! это заняло {movesMade} ходов</p>
                <button className="win-modal__btn" onClick={onClick}>Сыграть еще</button>
        </section>
    )
}