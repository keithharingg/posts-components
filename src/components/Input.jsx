import React, { useState } from 'react';

const Input = () => {
  let [value, setValue] = useState('');
  const changeText = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <div>
      <div>
        <h1>Input Text Here</h1>
        <input value={value} onChange={changeText} type="text" />
      </div>
    </div>
  );
};

export default Input;
