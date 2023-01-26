import { useState, useEffect } from "react";

import Item from "./Item";

const Grid = ({ count }) => {
  const [items, setItems] = useState([]);

  const onClickItem = (index) => {
    setItems((prev) => {
      let newItems = [...prev];
      newItems[index] = !prev[index];
      return newItems;
    });
  };

  useEffect(() => {
    setItems(new Array(count * count).fill(false));
  }, [count]);

  return (
    <div className={`grid grid-${count}`}>
      {items.map((value, index) => (
        <Item index={index} value={value} key={`item-${index + 1}`} onClick={onClickItem} />
      ))}
    </div>
  );
};

export default Grid;
