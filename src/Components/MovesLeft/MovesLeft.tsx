import React, {FC} from 'react';
import './MovesLeft.css';

interface Props {
    counter: number
}

export const MovesLeft: FC<Props> = ({counter}) => {
    return (
        <section className="moves-left">
            <p className="moves-left__text">осталось попыток</p>
            <p className="moves-left__counter">{40 - counter}</p>
        </section>
    )
}