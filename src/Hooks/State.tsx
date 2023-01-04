import { FC, useState } from 'react';

//React Function Component
const State: FC = () => {
    //useState hook
    const [state, setState] = useState({ count: 0, text: 'zero' });

    //onClick event handler to increase count
    const increment = () => {
        //setState wrt to previous state
        setState((prevState) => ({ ...prevState, count: state.count + 1, text: 'incremented' }));
    };

    //onClick event handler to decrease count
    const decrement = () => {
        //setState wrt to previous state
        setState((prevState) => ({ ...prevState, count: prevState.count - 1, text: 'decremented' }));
    };

    //onClick event handler to reset count
    const reset = () => {
        //setState wrt to previous state
        setState((prevState) => ({ ...prevState, count: 0, text: 'zero' }));
    };

    return (
        <div id='state'>
            <h1>State</h1>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <span>{state.text}</span>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default State;