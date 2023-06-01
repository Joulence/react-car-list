import { Fragment } from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <Fragment>
            <div className={classes.card}>
                <h2 >{props.name}</h2>
                <img src={props.link} alt={props.name} />
                <div className={classes['card-spec']}>
                    <div>Body</div>
                    <div>{props.body}</div>
                </div>
                <div className={classes['card-spec']}>
                    <div>Engine</div>
                    <div>{props.engine}</div>
                </div>
                <div className={classes['card-spec']}>
                    <div>Power</div>
                    <div>{props.power}</div>
                </div>
                <p>{props.description}</p>
            </div>
        </Fragment>
    );
}

export default Card;