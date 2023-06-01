import { DUMMY_DATA } from "../data/cars";
import Card from "./UI/Card";
import classes from "./CarsList.module.css";
import { useState } from "react";

const CarsList = () => {
    const [cards, setCards] = useState(DUMMY_DATA); // Store the card data in state

    const modalDescription = (cardId) => {
        setCards((prevCards) => {
            // Update the isShow value for the specific card that was clicked
            return prevCards.map((card) => {
                if (card.id === cardId) {
                    return { ...card, isShow: !card.isShow };
                }
                return card;
            });
        });
    };

    return (
        <div className={classes.carList}>
            {cards.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    link={item.link}
                    body={item.specifications.body}
                    engine={item.specifications.engine}
                    power={item.specifications.power}
                    modalDescription={modalDescription}
                    isShow={item.isShow} // Pass the isShow value for the specific card
                >
                    {item.description}
                </Card>
            ))}
        </div>
    );
}

export default CarsList;
