import React from 'react';
import './App.css';
import icon1 from '../../images/Icon1.jpg';
import icon2 from '../../images/Icon2.jpg';
import icon3 from '../../images/Icon3.jpg';
import icon4 from '../../images/Icon4.jpg';
import icon5 from '../../images/Icon5.jpg';
import icon6 from '../../images/Icon6.jpg';
import icon7 from '../../images/Icon7.jpg';
import icon8 from '../../images/Icon8.jpg';
import {MovesMade} from "../MovesMade/MovesMade";
import {Cards} from "../Cards/Cards";
import {MovesLeft} from "../MovesLeft/MovesLeft";

interface Item {
    icon: string
    id: number
    isOpen: boolean
}

const countOpenCards = (cards: Item[]) => {
    let counter = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].isOpen) {
            counter++
        }
    }
    return counter
}

export const App = () => {

    //
    const onCardClick = (item: Item) => {
        if (!item.isOpen) {
            item.isOpen = true
            if (countOpenCards(cards) % 2 == 0) {
                setMovesMade(movesMade + 1)
            }
        }
        setCards([...cards]);
    }

    const [movesMade, setMovesMade] = React.useState(
        0
    )

    const [cards, setCards] = React.useState([
        {icon: icon1, id: 1, isOpen: false},
        {icon: icon2, id: 2, isOpen: false},
        {icon: icon3, id: 3, isOpen: false},
        {icon: icon4, id: 4, isOpen: false},
        {icon: icon5, id: 5, isOpen: false},
        {icon: icon6, id: 6, isOpen: false},
        {icon: icon7, id: 7, isOpen: false},
        {icon: icon8, id: 8, isOpen: false},
        {icon: icon1, id: 9, isOpen: false},
        {icon: icon2, id: 10, isOpen: false},
        {icon: icon3, id: 11, isOpen: false},
        {icon: icon4, id: 12, isOpen: false},
        {icon: icon5, id: 13, isOpen: false},
        {icon: icon6, id: 14, isOpen: false},
        {icon: icon7, id: 15, isOpen: false},
        {icon: icon8, id: 16, isOpen: false}
    ])


    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <div className="header__title">
                        <p>Memory</p>
                    </div>
                </div>
            </header>

            <main>
                <section className="field-of-game">
                    <div className="container flex">
                        <MovesMade
                        counter={movesMade}
                        />
                        <Cards
                            items={cards}
                            onClick={onCardClick}
                        />
                        <MovesLeft
                            counter={movesMade}
                        />
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}