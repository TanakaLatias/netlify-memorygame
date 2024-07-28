import './SingleCard.css'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    return (
    <div className='card'>
        <div className={ flipped ? 'flipped' : '' }>
            <img className="front" src={card.src} />
            <img className="back" src="/img/cover.png" onClick={ !disabled ? () => handleChoice(card) : null } />
        </div>
    </div>
    );
};

export default SingleCard;