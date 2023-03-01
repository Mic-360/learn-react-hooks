import { FC, useMemo, useState } from 'react';
import '../App.css';

const Memo: FC = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // makes themeStyles independent of number state as far as it's cached
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  // makes themeStyles only re-render when dark changes
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  const buttonStyles = {
    height: '10px',
    width: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // button functions
  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div
      id='memo'
      style={themeStyles}
    >
      <h1>Memo</h1>
      <div className='buttons'>
        <button
          style={buttonStyles}
          onClick={increment}
        >
          -
        </button>
        {number}
        <button
          style={buttonStyles}
          onClick={decrement}
        >
          +
        </button>
      </div>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default Memo;

function slowFunction(num: number) {
  // console.log('Calling Slow Function'); //? To check if it's called

  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}
