import { useEffect, useState, useCallback } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", "matched": false },
  { "src": "/img/potion-1.png", "matched": false },
  { "src": "/img/ring-1.png", "matched": false },
  { "src": "/img/scroll-1.png", "matched": false },
  { "src": "/img/shield-1.png", "matched": false },
  { "src": "/img/sword-1.png", "matched": false },
  { "src": "/img/treasure-box.jpg", "matched": false },
  { "src": "/img/dragon.jpg", "matched": false },
];

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [ ...cardImages, ...cardImages ]
    .sort(() => Math.random() - 0.5)
    .map(card => ({ ...card, Id: Math.random() }));
    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };

  const handleChoice = ( card ) => {
    console.log(card);
    if (card === choiceOne || card === choiceTwo || card.matched === true) {
      console.log("none");
    } else {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    };
  };

  const resetTurn = useCallback(() => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(t => t + 1);
    setDisabled(false);
  }, [setChoiceOne, setChoiceTwo]);

  useEffect(() => {
    if ( choiceOne && choiceTwo ) {
      setDisabled(true);
      if ( choiceOne.src===choiceTwo.src ) {
        console.log("matched");
        setCards( cards.map( card => {
          if ( card.src===choiceOne.src ) {
            return { ...card, matched: true }
          } else {
            return card
          };
        }) );
        resetTurn();
      } else {
        console.log("did not match");
        setTimeout( ()=> resetTurn(), 1000 );
      };
    };
  }, [cards, choiceOne, resetTurn, choiceTwo]);

  console.log(cards);

  return (
    <div className="App">
      <h2>Memory Game</h2>
      <button onClick={ shuffleCards }>New Game</button>
      <p>Turns: {turns}</p>
      <div className='card-grid'>
        { cards.map(card => ( 
        <SingleCard 
        key={ card.id } 
        card={ card } 
        handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched === true}
        disabled={ disabled }
        /> ))}
      </div>
    </div>
  );
}

export default App;
