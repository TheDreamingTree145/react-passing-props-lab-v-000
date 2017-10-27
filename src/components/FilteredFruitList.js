import React, { Component } from 'react';

const FilteredFruitList = ({fruit, filter}) => {
  const list = filter ? fruit.filter(fruit => fruit.fruit_type === filter) : fruit


  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}


export default FilteredFruitList;
