import { Fragment } from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <Fragment>
            <div className={classes.card}>
                <h2 >{props.name}</h2>
                <img src={props.link} alt={props.name} />
                <p>{props.description}</p>
            </div>
        </Fragment>
    );
}

export default Card;