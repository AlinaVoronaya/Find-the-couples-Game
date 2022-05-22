import React, {FC} from 'react';
import './MovesMade.css';

interface Props {
    counter: number
}

export const MovesMade: FC<Props> = ({counter}) => {
    return (
        <section className="moves-made">
            <p className="moves-made__text">сделано ходов</p>
            <p className="moves-made__counter">{counter}</p>
        </section>
    )
}