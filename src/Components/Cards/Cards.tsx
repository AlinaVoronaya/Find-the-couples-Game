import React, {FC} from 'react';
import './Cards.css';
import cover from '../../images/Cover.jpg';

interface Item {
    icon: string
    id: number
    isOpen: boolean
}

interface Props {
    items: Item[]
    onClick: (item: Item) => void;
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
                        {item.isOpen && <img className="cards__face" src={item.icon} alt="Card Face"/>}
                        {!item.isOpen && <img className="cards__cover" src={cover} alt="Cover"/>}

                    </div>
                )
            })}
        </section>
    )
}