import React, {FC} from 'react';
import './LoseModal.css';

interface Props {
    onClick: () => void;
}

export const LoseModal: FC<Props> = ({onClick}) => {

    return (
        <section className="lose-modal">
            <p className="lose-modal__text">Увы, вы проиграли  {'\n'} у вас кончились ходы</p>
            <button className="lose-modal__btn" onClick={onClick}>Сыграть еще</button>
        </section>
    )
}