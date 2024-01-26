import React, { useState } from 'react';

const Counter = () => {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <div>
        <p>Counter</p>
        <button onClick={increment}>+</button>
        <p>{counter}</p>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
