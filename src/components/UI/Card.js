import classes from './Card.module.css';

const Card = (props) => {
    const { id, name, link, body, engine, power, modalDescription, isShow } = props;

    const handleClick = () => {
        modalDescription(id); // Pass the card's ID to the modalDescription function
    };

    return (
        <div onClick={handleClick} className={classes.card}>
            <h2>{name}</h2>
            <img src={link} alt={name} />
            <div className={classes['card-spec']}>
                <div>Body</div>
                <div>{body}</div>
            </div>
            <div className={classes['card-spec']}>
                <div>Engine</div>
                <div>{engine}</div>
            </div>
            <div className={classes['card-spec']}>
                <div>Power</div>
                <div>{power}</div>
            </div>
            {isShow && <p>{props.children}</p>}
        </div>
    );
}

export default Card;
