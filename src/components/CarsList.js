import { DUMMY_DATA } from "../data/cars";
import Card from "./UI/Card";
import classes from "./CarsList.module.css";
import { useEffect, useState } from "react";

const CarsList = () => {
    const [cars, setCars] = useState([]);
    const [cards, setCards] = useState(DUMMY_DATA);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchCars = async () => {
            const response = await fetch('https://react-cars-list-default-rtdb.firebaseio.com/cars.json');

            if (!response.ok) {
                throw new Error('Error occured during fetching data');
            }

            const resData = await response.json();

            const loadedCars = [];

            for (const key in resData) {
                console.log(resData[key].description);
                loadedCars.push({
                    id: key,
                    name: resData[key].name,
                    description: resData[key].description,
                    link: resData[key].link,
                    body: resData[key].specifications.body,
                    engine: resData[key].specifications.engine,
                    power: resData[key].specifications.power,
                });
            }
            setCars(loadedCars);
            setIsLoading(false);
        };
        fetchCars().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section>
                <p>{httpError}</p>
            </section>
        );
    }

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
            {cars.map((car) => (
                <Card
                    key={car.id}
                    id={car.id}
                    name={car.name}
                    link={car.link}
                    body={car.body}
                    engine={car.engine}
                    power={car.power}
                    modalDescription={modalDescription}
                    isShow={car.isShow} // Pass the isShow value for the specific card
                >
                    {car.description}
                </Card>
            ))}
        </div>
    );
}

export default CarsList;
