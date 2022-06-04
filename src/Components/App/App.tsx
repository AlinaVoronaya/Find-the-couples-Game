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
import {CardItem} from '../../types';
import {WinModal} from "../WinModal/WinModal";
import {LoseModal} from "../LoseModal/LoseModal";

// Проходим циклом по всем карточкам и проверяем - если карточка открыта и не скрыта, увеличиваем счетчик (используем этот счетчик,
// чтобы отслеживать, что было открыто 2 карты и сравнивать их)
const countOpenCards = (cards: CardItem[]) => {
    let counter = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].state == "open") {
            counter++
        }
    }
    return counter
}

// Функция перемешивающая массив карточек
const shuffleCards = (cards: CardItem[]): CardItem[] => {
    // for (let i = cards.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [cards[i], cards[j]] = [cards[j], cards[i]];
    // }
    return cards
}

const winGame = (cards: CardItem[]): boolean => {
    return cards.every(function (item: CardItem) {
        return item.state == "hidden";
    })
}

const getInitialCardsState = () => {
    return [
        {icon: icon1, id: 1, state: "closed"},
        {icon: icon2, id: 2, state: "closed"},
        {icon: icon3, id: 3, state: "closed"},
        {icon: icon4, id: 4, state: "closed"},
        {icon: icon5, id: 5, state: "closed"},
        {icon: icon6, id: 6, state: "closed"},
        {icon: icon7, id: 7, state: "closed"},
        {icon: icon8, id: 8, state: "closed"},
        {icon: icon1, id: 9, state: "closed"},
        {icon: icon2, id: 10, state: "closed"},
        {icon: icon3, id: 11, state: "closed"},
        {icon: icon4, id: 12, state: "closed"},
        {icon: icon5, id: 13, state: "closed"},
        {icon: icon6, id: 14, state: "closed"},
        {icon: icon7, id: 15, state: "closed"},
        {icon: icon8, id: 16, state: "closed"}
    ]
}


export const App = () => {

    // Описываем логику работы различных вариантов при нажатии на карточки ( если карточка не была открыта, то выходим из функции)
    const onCardClick = (item: CardItem) => {
        if (item.state !== "closed") {
            return
        }
        // Если карточка открыта и количество открытых карточек = 2, то увеличиваем счетчик сделаных ходов.
        item.state = "open"
        if (countOpenCards(cards) == 2) {
            setMovesMade(movesMade + 1)
            {
                // Пройти по всем карточкам, найти открытые, сравнить и либо скрыть, либо закрыть
                let openCard1: CardItem | null = null;
                for (let i = 0; i < cards.length; i++) {
                    // Если карточка закрыта или скрыта, идем дальше
                    if (cards[i].state !== "open") {
                        continue
                    }

                    // Если мы еще не нашли первую открытую карточку, то мы ее запоминаем в
                    if (openCard1 == null) {
                        openCard1 = cards[i];
                        continue
                    }

                    // Если иконки двух открытых карточек совпадают, скрываем обе эти карточки
                    if (cards[i].icon == openCard1.icon) {
                        console.log(openCard1, cards[i]);
                        openCard1.state = "hidden";
                        cards[i].state = "hidden";
                    } else {
                        openCard1.state = "closed";
                        cards[i].state = "closed";
                    }
                }
            }
            console.log(cards);
            if (winGame(cards)) {
                setGameState("user win")
            } else if (movesMade >= 39) {
                setGameState("user lose")
            }
        }
        setCards([...cards]);
    }

    const onButtonClick = () => {
        setGameState("running")
        setCards( getInitialCardsState() )
        setMovesMade(0)
    }

    const [movesMade, setMovesMade] = React.useState(
        0
    )

    const [gameState, setGameState] = React.useState("running")

    const [cards, setCards] = React.useState(shuffleCards(
        getInitialCardsState()
    ))


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
                        {gameState == "user win" && <WinModal onClick={onButtonClick} movesMade={movesMade}/>}
                        {gameState == "user lose" && <LoseModal onClick={onButtonClick} />}
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}