import './SingleCard.css'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    return (
    <div className='card'>
        <div className={ flipped ? 'flipped' : '' }>
            <img className="front" src={card.src} alt="character" />
            <img className="back" src="/img/cover.png" onClick={ !disabled ? () => handleChoice(card) : null } alt="character" />
        </div>
    </div>
    );
};

export default SingleCard;