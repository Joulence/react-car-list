
import { DUMMY_DATA } from "../data/cars";
import Card from "./UI/Card";
import classes from "./CarsList.module.css";

const CarsList = () => {
    return (
        <div className={classes.carList}>
            {DUMMY_DATA.map((item) => (
                <Card name={item.name} link={item.link} description={item.description}/>
            ))}
        </div>
    );
}

export default CarsList;