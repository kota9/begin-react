import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        // setNumber(number + 1);
        setNumber(prevNumber1 => prevNumber1 + 1);
    }
    const onDecrease = () => {
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    }

    const [count, setCount] = useState(0);
    const onClick = () => {
        setCount(count+ 1);
        setCount(count+ 1);
        console.dir(count);
      }
      
      const onClick2 = () => {
        setCount(count=> count+ 1);
        setCount(count=> count+ 1);
          console.dir(count);
      }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>

            <button onClick={onClick}>aa</button>
            <button onClick={onClick2}>bb</button>

        </div>
    );
}

export default Counter;