import Card from "./UI/Card";
import classes from "./CarsList.module.css";
import { useEffect, useState } from "react";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [openCardId, setOpenCardId] = useState(null); // Track the ID of the open card

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://react-cars-list-default-rtdb.firebaseio.com/cars.json"
        );

        if (!response.ok) {
          throw new Error("Error occurred during fetching data");
        }

        const resData = await response.json();

        const loadedCars = [];

        for (const key in resData) {
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
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchCars();
  }, []);

  const modalDescription = (cardId) => {
    setOpenCardId((prevCardId) => (prevCardId === cardId ? null : cardId));
  };

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
          isShow={openCardId === car.id} // Check if the current card ID matches the openCardId
        >
          {car.description}
        </Card>
      ))}
    </div>
  );
};

export default CarsList;
