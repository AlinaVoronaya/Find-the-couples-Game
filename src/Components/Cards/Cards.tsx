import React, {FC} from 'react';
import './Cards.css';
import cover from '../../images/Cover.jpg';
import {CardItem} from '../../types';

interface Props {
    items: CardItem[]
    onClick: (item: CardItem) => void;
}

export const Cards: FC<Props> = ({items, onClick}) => {

    return (
        <section className="cards">
            {items.map((item) => {
                return (
                    <section className="flip-card" onClick={() => onClick(item)} key={item.id}>
                        <div className={`card card--${item.state}`}>
                            <img className="card__face" src={item.icon} alt="icon"/>
                            <img className="card__cover" src={cover} alt="cover"/>
                        </div>
                    </section>
                )
            })}
        </section>
    )
}