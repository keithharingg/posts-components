import React from 'react';
import styles from './MySelect.module.css';

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={styles.mySelect}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.name.length} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
