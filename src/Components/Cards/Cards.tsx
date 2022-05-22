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
                    <div
                        className="cards__item"
                        onClick={() => onClick(item)}
                        key={item.id}
                    >
                        {item.isHidden && <div className="cards__hidden"></div>}
                        {!item.isHidden && item.isOpen && <img className="cards__face" src={item.icon} alt="Card Face"/>}
                        {!item.isHidden && !item.isOpen && <img className="cards__cover" src={cover} alt="Cover"/>}

                    </div>
                )
            })}
        </section>
    )
}