
import './Card.css';

function Card(props) {
    // class name thi apeli css pan add thai jayy 

    const classes = 'card ' + props.className;

    // reusable wraper function using props.children
    return <div className={classes}>{props.children}</div>;
}

export default Card;
